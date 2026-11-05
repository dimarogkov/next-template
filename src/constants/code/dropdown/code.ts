export const DROPDOWN_UTILS_CODE = `import { MutableRefObject, Ref } from 'react';

export const assignRefs =
  <T>(...refs: (Ref<T> | undefined)[]) =>
  (node: T) => {
    refs.forEach((r) => {
      if (!r) {
        return;
      }

      if (typeof r === 'function') {
        r(node);
      } else {
        (r as MutableRefObject<T | null>).current = node;
      }
    });
  };`;

export const DROPDOWN_CODE = `import { DropdownWrapper } from './DropdownWrapper';
import { DropdownTrigger } from './DropdownTrigger';
import { DropdownContent } from './DropdownContent';
import { DropdownMenu } from './DropdownMenu';
import { DropdownLabel } from './DropdownLabel';
import { DropdownSeparator } from './DropdownSeparator';
import { DropdownItem } from './DropdownItem';
import { DropdownSubMenu } from './DropdownSubMenu';
import { DropdownSubTrigger } from './DropdownSubTrigger';
import { DropdownSubContent } from './DropdownSubContent';

export const Dropdown = Object.assign(DropdownWrapper, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Menu: DropdownMenu,
  Label: DropdownLabel,
  Separator: DropdownSeparator,
  Item: DropdownItem,
  SubMenu: DropdownSubMenu,
  SubTrigger: DropdownSubTrigger,
  SubContent: DropdownSubContent
});`;

export const DROPDOWN_WRAPPER_CODE = `'use client';
import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  RefAttributes,
  useEffect,
  useRef,
  useState
} from 'react';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  isOpen?: boolean;
  className?: string;
}

export const DropdownWrapper = forwardRef<HTMLDivElement, Props>(
  ({ isOpen = false, className = '', ...props }, ref) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
    const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const setRefs = assignRefs<HTMLDivElement>(ref, dropdownRef);

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      const isInsideWrapper = dropdownRef.current?.contains(target);
      const isInsidePortal = target.closest('[data-dropdown-portal]');

      if (!isInsideWrapper && !isInsidePortal) {
        setIsDropdownOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);

      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, []);

    return (
      <div ref={setRefs} {...props} className={cn('relative', className)}>
        {Children.map(props.children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               triggerElement,
               isOpen: isDropdownOpen,
               setTriggerElement,
               setIsOpen: setIsDropdownOpen
             })
            : child;
        })}
      </div>
    );
  }
);

DropdownWrapper.displayName = 'DropdownWrapper';`;

export const DROPDOWN_TRIGGER_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  className?: string;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownTrigger = forwardRef<HTMLDivElement, Props>(
  ({ triggerElement, isOpen, className = '', setTriggerElement, setIsOpen, ...props }, ref) => {
    const setRefs = assignRefs<HTMLDivElement>(ref, setTriggerElement);

    const toggleOpen = () => setIsOpen?.((prevState) => !prevState);

    return (
      <div
        ref={setRefs}
        {...props}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={toggleOpen}
        className={cn('relative cursor-pointer', className)}
      />
    );
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';`;

export const DROPDOWN_CONTENT_CODE = `'use client';
import {
  Children,
  cloneElement,
  Dispatch,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefAttributes,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { useEscapeKey, useFocusRestore } from '@hooks';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  subTriggerElement?: HTMLElement | null;
  isSubOpen?: boolean;
  align?: 'start' | 'end';
  position?: 'bottom' | 'left' | 'right' | 'top';
  className?: string;
  children?: ReactNode;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

const PLACEMENTS = {
  bottom: { start: 'bottom-start', end: 'bottom-end' },
  top: { start: 'top-start', end: 'top-end' },
  left: { start: 'left-start', end: 'left-end' },
  right: { start: 'right-start', end: 'right-end' }
} as const;

export const DropdownContent = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      subTriggerElement,
      isSubOpen,
      align = 'start',
      position = 'bottom',
      className = '',
      children,
      setTriggerElement,
      setIsOpen,
      setSubTriggerElement,
      setIsSubOpen,
      ...props
    },
    ref
  ) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    const { refs, x, y, strategy } = useFloating({
      open: isOpen,
      strategy: 'fixed',
      placement: PLACEMENTS[position][align],
      middleware: [offset(4), flip(), shift({ padding: 8 })],
      elements: { reference: triggerElement },
      whileElementsMounted: autoUpdate
    });

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const setRefs = assignRefs<HTMLDivElement>(ref, contentRef, refs.setFloating);
    const closeDropdown = useCallback(() => setIsOpen?.(false), [setIsOpen]);

    useEscapeKey(closeDropdown, isOpen);
    useFocusRestore(contentRef, isOpen);

    const animation: HTMLMotionProps<'div'> = {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
      exit: { scale: 0.95, opacity: 0 }
    };

    return !isMounted
      ? null
      : createPortal(
         <AnimatePresence mode="wait">
           {isOpen && (
             <motion.div
               ref={setRefs}
               {...props}
               {...animation}
               role="menu"
               tabIndex={-1}
               data-dropdown-portal
               style={{ position: strategy, top: y ?? 0, left: x ?? 0, ...props.style }}
               className={cn(
                 'border-border bg-bg z-10 w-max max-w-[calc(100vw-32px)] rounded-md border p-1 outline-hidden will-change-transform',
                 className
               )}
             >
               {Children.map(children, (child) => {
                 return isValidElement(child)
                   ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                      triggerElement,
                      isOpen,
                      subTriggerElement,
                      isSubOpen,
                      setTriggerElement,
                      setIsOpen,
                      setSubTriggerElement,
                      setIsSubOpen
                    })
                   : child;
               })}
             </motion.div>
           )}
         </AnimatePresence>,
         document.body
       );
  }
);

DropdownContent.displayName = 'DropdownContent';`;

export const DROPDOWN_MENU_CODE = `'use client';
import {
  Children,
  cloneElement,
  Dispatch,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  RefAttributes,
  SetStateAction
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  subTriggerElement?: HTMLElement | null;
  isSubOpen?: boolean;
  className?: string;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownMenu = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      subTriggerElement,
      isSubOpen,
      className = '',
      setTriggerElement,
      setIsOpen,
      setSubTriggerElement,
      setIsSubOpen,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} {...props} className={cn('relative flex w-full flex-col gap-1', className)}>
        {Children.map(props.children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               triggerElement,
               isOpen,
               subTriggerElement,
               isSubOpen,
               setTriggerElement,
               setIsOpen,
               setSubTriggerElement,
               setIsSubOpen
             })
            : child;
        })}
      </div>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';`;

export const DROPDOWN_LABEL_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Text } from '@components/atoms/Text';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  subTriggerElement?: HTMLElement | null;
  isSubOpen?: boolean;
  className?: string;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownLabel = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      subTriggerElement,
      isSubOpen,
      className = '',
      setTriggerElement,
      setIsOpen,
      setSubTriggerElement,
      setIsSubOpen,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} {...props} className={cn('relative px-2 py-1', className)}>
        <Text className="text-title!">{props.children}</Text>
      </div>
    );
  }
);

DropdownLabel.displayName = 'DropdownLabel';`;

export const DROPDOWN_SEPARATOR_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Separator } from '@components/atoms/Separator';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  subTriggerElement?: HTMLElement | null;
  isSubOpen?: boolean;
  className?: string;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownSeparator = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      subTriggerElement,
      isSubOpen,
      className = '',
      setTriggerElement,
      setIsOpen,
      setSubTriggerElement,
      setIsSubOpen,
      ...props
    },
    ref
  ) => {
    return <Separator ref={ref} {...props} decorative={false} className={cn('-mx-1 w-auto!', className)} />;
  }
);

DropdownSeparator.displayName = 'DropdownSeparator';`;

export const DROPDOWN_ITEM_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import { Text } from '@components/atoms/Text';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  subTriggerElement?: HTMLElement | null;
  isSubOpen?: boolean;
  disabled?: boolean;
  className?: string;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      subTriggerElement,
      isSubOpen,
      disabled = false,
      className = '',
      setTriggerElement,
      setIsOpen,
      setSubTriggerElement,
      setIsSubOpen,
      ...props
    },
    ref
  ) => {
    const closeDropdown = () => {
      if (disabled) return;
      setIsOpen?.(false);
      setIsSubOpen?.(false);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeDropdown();
      }
    };

    return (
      <div
        ref={ref}
        {...props}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled || undefined}
        onClick={closeDropdown}
        onKeyDown={onKeyDown}
        className={cn(
          'hover:bg-border relative cursor-pointer rounded-md px-2 py-1 transition-colors duration-300',
          className,
          {
            'pointer-events-none opacity-60': disabled
          }
        )}
      >
        <Text className="text-title!">{props.children}</Text>
      </div>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';`;

export const DROPDOWN_SUB_MENU_CODE = `'use client';
import {
  Children,
  cloneElement,
  Dispatch,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  RefAttributes,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  subTriggerElement?: HTMLElement | null;
  isSubOpen?: boolean;
  className?: string;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownSubMenu = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      subTriggerElement,
      isSubOpen,
      className = '',
      setTriggerElement,
      setIsOpen,
      setSubTriggerElement,
      setIsSubOpen,
      ...props
    },
    ref
  ) => {
    const [ownSubTriggerElement, setOwnSubTriggerElement] = useState<HTMLElement | null>(null);
    const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

    useEffect(() => {
      if (!isOpen) {
        setIsSubDropdownOpen(false);
      }
    }, [isOpen]);

    return (
      <div
        ref={ref}
        {...props}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsSubDropdownOpen(true)}
        onMouseLeave={() => setIsSubDropdownOpen(false)}
        className={cn('relative', className)}
      >
        {Children.map(props.children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               triggerElement,
               isOpen,
               subTriggerElement: ownSubTriggerElement,
               isSubOpen: isSubDropdownOpen,
               setTriggerElement,
               setIsOpen,
               setSubTriggerElement: setOwnSubTriggerElement,
               setIsSubOpen: setIsSubDropdownOpen
             })
            : child;
        })}
      </div>
    );
  }
);

DropdownSubMenu.displayName = 'DropdownSubMenu';`;

export const DROPDOWN_SUB_TRIGGER_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import { Text } from '@components/atoms/Text';
import { assignRefs } from '@utils';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  subTriggerElement?: HTMLElement | null;
  isSubOpen?: boolean;
  className?: string;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownSubTrigger = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      subTriggerElement,
      isSubOpen,
      className = '',
      setTriggerElement,
      setIsOpen,
      setSubTriggerElement,
      setIsSubOpen,
      ...props
    },
    ref
  ) => {
    const setRefs = assignRefs<HTMLDivElement>(ref, setSubTriggerElement);

    const toggleSubOpen = () => setIsSubOpen?.((prevState) => !prevState);

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault();
        setIsSubOpen?.(true);
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setIsSubOpen?.(false);
      }
    };

    return (
      <div
        ref={setRefs}
        {...props}
        tabIndex={0}
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={isSubOpen}
        onClick={toggleSubOpen}
        onKeyDown={onKeyDown}
        className={cn(
          'hover:bg-border relative flex cursor-pointer items-center justify-between rounded-md px-2 py-1 outline-hidden transition-colors duration-300',
          className,
          {
            'bg-border': isSubOpen
          }
        )}
      >
        <Text className="text-title! w-fit!">{props.children}</Text>
        <ChevronRight aria-hidden="true" className="size-4" />
      </div>
    );
  }
);

DropdownSubTrigger.displayName = 'DropdownSubTrigger';`;

export const DROPDOWN_SUB_CONTENT_CODE = `'use client';
import {
  Children,
  cloneElement,
  Dispatch,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefAttributes,
  SetStateAction
} from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  subTriggerElement?: HTMLElement | null;
  isSubOpen?: boolean;
  className?: string;
  children?: ReactNode;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSubTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsSubOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownSubContent = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      subTriggerElement,
      isSubOpen,
      className = '',
      children,
      setTriggerElement,
      setIsOpen,
      setSubTriggerElement,
      setIsSubOpen,
      ...props
    },
    ref
  ) => {
    const { refs, x, y, strategy } = useFloating({
      open: isSubOpen,
      strategy: 'absolute',
      placement: 'right-start',
      middleware: [offset({ mainAxis: 4, crossAxis: -5 }), flip(), shift({ padding: 8 })],
      elements: { reference: subTriggerElement },
      whileElementsMounted: autoUpdate
    });

    const setRefs = assignRefs<HTMLDivElement>(ref, refs.setFloating);

    const animation: HTMLMotionProps<'div'> = {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
      exit: { scale: 0.95, opacity: 0 }
    };

    return (
      <AnimatePresence mode="wait">
        {isSubOpen && (
          <motion.div
            ref={setRefs}
            {...props}
            {...animation}
            role="menu"
            style={{ position: strategy, top: y ?? 0, left: x ?? 0, ...props.style }}
            className={cn(
              'border-border bg-bg z-10 w-max max-w-[calc(100vw-32px)] rounded-md border p-1 will-change-transform',
              className
            )}
          >
            {Children.map(children, (child) => {
              return isValidElement(child)
                ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                   triggerElement,
                   isOpen,
                   subTriggerElement,
                   isSubOpen,
                   setTriggerElement,
                   setIsOpen,
                   setSubTriggerElement,
                   setIsSubOpen
                 })
                : child;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

DropdownSubContent.displayName = 'DropdownSubContent';`;

export const USE_ESCAPE_KEY_CODE = `import { useEffect } from 'react';

export const useEscapeKey = (onEscape: () => void, isActive?: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, isActive]);
};`;

export const USE_FOCUS_RESTORE_CODE = `import { RefObject, useEffect, useRef } from 'react';

export const useFocusRestore = (containerRef: RefObject<HTMLElement | null>, isActive?: boolean) => {
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const wasActiveRef = useRef(false);

  if (isActive && !wasActiveRef.current) {
    previouslyFocusedRef.current = document.activeElement as HTMLElement;
  }

  wasActiveRef.current = !!isActive;

  useEffect(() => {
    if (!isActive) {
      previouslyFocusedRef.current?.focus();
      return;
    }

    if (!containerRef.current?.contains(document.activeElement)) {
      containerRef.current?.focus();
    }
  }, [containerRef, isActive]);
};`;
