export const SELECT_TYPE_CODE = `export interface ISelectItem {
  value: string;
  label: string;
}`;

export const SELECT_UTILS_CODE = `import { MutableRefObject, Ref } from 'react';

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

export const SELECT_CODE = `import { SelectWrapper } from './SelectWrapper';
import { SelectTrigger } from './SelectTrigger';
import { SelectOptions } from './SelectOptions';
import { SelectGroup } from './SelectGroup';
import { SelectLabel } from './SelectLabel';
import { SelectOption } from './SelectOption';

export const Select = Object.assign(SelectWrapper, {
  Trigger: SelectTrigger,
  Options: SelectOptions,
  Group: SelectGroup,
  Label: SelectLabel,
  Option: SelectOption
});`;

export const SELECT_WRAPPER_CODE = `'use client';
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  RefAttributes,
  SelectHTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
  className?: string;
}

interface SelectOptionProps {
  value: string;
  children?: React.ReactNode;
}

export const SelectWrapper = forwardRef<HTMLSelectElement, Props>(({ className = '', ...props }, ref) => {
  const [selectedItems, setSelectedItems] = useState<ISelectItem[]>([]);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const mergedRef = assignRefs(ref, selectRef);
  const isMultiple = !!props.multiple;

  const optionsArr = useMemo(() => {
    const getOptions = (node: React.ReactNode): ReactElement<SelectOptionProps>[] =>
      Children.toArray(node).flatMap((child) =>
        isValidElement(child)
          ? (child.type as { displayName?: string })?.displayName === 'SelectOption'
            ? [child as ReactElement<SelectOptionProps>]
            : getOptions((child.props as { children?: React.ReactNode })?.children)
          : []
      );

    return getOptions(props.children).map((el) => el.props);
  }, [props.children]);

  useEffect(() => {
    if (props.value === undefined) {
      return;
    }

    const currentOption = optionsArr.find((option) => option.value === props.value);

    setSelectedItems(
      currentOption ? [{ value: currentOption.value, label: currentOption.children as string }] : []
    );
  }, [props.value, optionsArr]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      const isInsideWrapper = wrapperRef.current?.contains(target);
      const isInsidePortal = target.closest('[data-select-portal]');

      if (!isInsideWrapper && !isInsidePortal) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectedItems = (item: ISelectItem) => {
    setSelectedItems((prevState) => {
      if (!isMultiple) {
        return [item];
      }

      const isItemExist = prevState.some(({ value }) => value === item.value);
      return isItemExist ? prevState.filter(({ value }) => value !== item.value) : [...prevState, item];
    });

    if (selectRef.current) {
      selectRef.current.value = item.value;
      selectRef.current.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <div ref={wrapperRef} className={cn('relative w-full', className)}>
      <select
        ref={mergedRef}
        {...props}
        name={props.name || 'select'}
        className="hidden"
        tabIndex={-1}
        aria-hidden
      >
        {optionsArr.map((option) => (
          <option key={option.value} value={option.value}>
            {option.children}
          </option>
        ))}
      </select>

      {Children.map(props.children, (child) => {
        return isValidElement(child)
          ? cloneElement(child as ReactElement<Record<string, unknown>>, {
             triggerElement,
             isOpen: isSelectOpen,
             isMultiple,
             selectedItems,
             disabled: !!props.disabled,
             setTriggerElement,
             setIsOpen: setIsSelectOpen,
             setSelectedItems: handleSelectedItems
           })
          : child;
      })}
    </div>
  );
});

SelectWrapper.displayName = 'SelectWrapper';`;

export const SELECT_TRIGGER_CODE = `'use client';
import {
  Dispatch,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  KeyboardEvent,
  RefAttributes,
  SetStateAction
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import { Text } from '@components/atoms/Text';
import { assignRefs } from '@utils';
import { ChevronDown, LucideProps } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  placeholder?: string;
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  isMultiple?: boolean;
  selectedItems?: ISelectItem[];
  disabled?: boolean;
  icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  className?: string;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectTrigger = forwardRef<HTMLDivElement, Props>(
  (
    {
      placeholder = 'Select',
      triggerElement,
      isOpen,
      isMultiple,
      selectedItems,
      disabled = false,
      icon,
      className = '',
      setTriggerElement,
      setIsOpen,
      setSelectedItems,
      ...props
    },
    ref
  ) => {
    const selectedText = selectedItems?.map((item) => item.label).join(', ');
    const hasValue = !!selectedItems?.length;
    const Icon = icon || ChevronDown;

    const setRefs = assignRefs<HTMLDivElement>(ref, setTriggerElement);
    const toggleOpen = () => !disabled && setIsOpen?.((prevState) => !prevState);

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleOpen();
      }
    };

    return (
      <div
        ref={setRefs}
        {...props}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-disabled={disabled || undefined}
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
        className={cn(
          'border-border relative flex h-10 w-full cursor-pointer items-center rounded-md border px-4 pr-12 select-none',
          className,
          {
            'pointer-events-none opacity-60': disabled
          }
        )}
      >
        <Text className={cn({ 'text-title': hasValue })}>{hasValue ? selectedText : placeholder}</Text>
        <Icon className="absolute right-4 size-5" />
      </div>
    );
  }
);

SelectTrigger.displayName = 'SelectTrigger';`;

export const SELECT_OPTIONS_CODE = `'use client';
import {
  Children,
  cloneElement,
  Dispatch,
  forwardRef,
  isValidElement,
  KeyboardEvent,
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
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/react-dom';
import { useEscapeKey, useFocusRestore } from '@hooks';
import { ISelectItem } from '@interfaces/SelectItem';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  isMultiple?: boolean;
  selectedItems?: ISelectItem[];
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectOptions = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      isMultiple,
      selectedItems,
      disabled,
      className = '',
      children,
      setTriggerElement,
      setIsOpen,
      setSelectedItems,
      ...props
    },
    ref
  ) => {
    const optionsRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    const { refs, x, y, strategy } = useFloating({
      open: isOpen,
      strategy: 'fixed',
      placement: 'bottom-start',
      middleware: [
        offset(4),
        flip(),
        shift({ padding: 8 }),
        size({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, { width: \`\${rects.reference.width}px\` });
          }
        })
      ],
      elements: { reference: triggerElement },
      whileElementsMounted: autoUpdate
    });

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const setRefs = assignRefs<HTMLDivElement>(ref, optionsRef, refs.setFloating);
    const closeOptions = useCallback(() => setIsOpen?.(false), [setIsOpen]);

    useEscapeKey(closeOptions, isOpen);
    useFocusRestore(optionsRef, isOpen);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') {
        return;
      }

      e.preventDefault();

      const options = Array.from(
        optionsRef.current?.querySelectorAll<HTMLElement>('[role="option"]:not([aria-disabled="true"])') ?? []
      );

      const currentIndex = options.indexOf(document.activeElement as HTMLElement);

      if (currentIndex === -1) {
        options[e.key === 'ArrowDown' ? 0 : options.length - 1]?.focus();
        return;
      }

      const nextIndex =
        e.key === 'ArrowDown'
          ? (currentIndex + 1) % options.length
          : (currentIndex - 1 + options.length) % options.length;

      options[nextIndex]?.focus();
    };

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
               role="listbox"
               tabIndex={-1}
               aria-multiselectable={isMultiple}
               data-select-portal
               onKeyDown={handleKeyDown}
               style={{ position: strategy, top: y ?? 0, left: x ?? 0, ...props.style }}
               className={cn(
                 'border-border bg-bg z-10 flex max-h-73 flex-col gap-1 overflow-auto rounded-md border p-1 will-change-transform',
                 className
               )}
             >
               {Children.map(children, (child) => {
                 return isValidElement(child)
                   ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                      triggerElement,
                      isOpen,
                      isMultiple,
                      selectedItems,
                      disabled: disabled || (child.props as { disabled?: boolean }).disabled,
                      setTriggerElement,
                      setIsOpen,
                      setSelectedItems
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

SelectOptions.displayName = 'SelectOptions';`;

export const SELECT_GROUP_CODE = `'use client';
import {
  Children,
  cloneElement,
  Dispatch,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
  RefAttributes,
  SetStateAction,
  useId
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  isMultiple?: boolean;
  selectedItems?: ISelectItem[];
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectGroup = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      isMultiple,
      selectedItems,
      disabled,
      className = '',
      children,
      setTriggerElement,
      setIsOpen,
      setSelectedItems,
      ...props
    },
    ref
  ) => {
    const labelId = useId();

    return (
      <div
        ref={ref}
        {...props}
        role="group"
        aria-labelledby={labelId}
        className={cn('relative flex flex-col gap-1', className)}
      >
        {Children.map(children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               triggerElement,
               isOpen,
               isMultiple,
               selectedItems,
               disabled: disabled || (child.props as { disabled?: boolean }).disabled,
               labelId,
               setTriggerElement,
               setIsOpen,
               setSelectedItems
             })
            : child;
        })}
      </div>
    );
  }
);

SelectGroup.displayName = 'SelectGroup';`;

export const SELECT_LABEL_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  isMultiple?: boolean;
  selectedItems?: ISelectItem[];
  disabled?: boolean;
  labelId?: string;
  className?: string;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectLabel = forwardRef<HTMLDivElement, Props>(
  (
    {
      triggerElement,
      isOpen,
      isMultiple,
      selectedItems,
      disabled,
      labelId,
      className = '',
      setTriggerElement,
      setIsOpen,
      setSelectedItems,
      ...props
    },
    ref
  ) => {
    return <div ref={ref} {...props} id={labelId} className={cn('relative px-2 py-1 text-sm', className)} />;
  }
);

SelectLabel.displayName = 'SelectLabel';`;

export const SELECT_OPTION_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
  value: string;
  triggerElement?: HTMLElement | null;
  isOpen?: boolean;
  isMultiple?: boolean;
  selectedItems?: ISelectItem[];
  disabled?: boolean;
  labelId?: string;
  className?: string;
  setTriggerElement?: Dispatch<SetStateAction<HTMLElement | null>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectOption = forwardRef<HTMLSpanElement, Props>(
  (
    {
      value,
      triggerElement,
      isOpen,
      isMultiple,
      selectedItems,
      disabled,
      labelId,
      className = '',
      setTriggerElement,
      setIsOpen,
      setSelectedItems,
      ...props
    },
    ref
  ) => {
    const isActive = selectedItems?.some((item) => value === item.value) || false;

    const selectItem = () => {
      if (disabled) return;

      setSelectedItems?.({ value, label: props.children as string });
      !isMultiple && setIsOpen?.(false);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectItem();
      }
    };

    return (
      <span
        ref={ref}
        {...props}
        role="option"
        tabIndex={disabled ? -1 : 0}
        aria-selected={isActive}
        aria-disabled={disabled || undefined}
        onClick={selectItem}
        onKeyDown={onKeyDown}
        className={cn(
          'text-title relative flex w-full cursor-pointer items-center rounded-md px-2 py-1 pr-8',
          className,
          {
            'hover:bg-border transition-colors duration-300': !isActive || (isActive && isMultiple),
            'bg-border pointer-events-none': isActive && !isMultiple,
            'pointer-events-none opacity-60': disabled
          }
        )}
      >
        {props.children}

        <Check
          className={cn('text-text absolute right-2 size-4 transition-all duration-300', {
            'invisible opacity-0': !isActive,
            'visible opacity-100': isActive
          })}
        />
      </span>
    );
  }
);

SelectOption.displayName = 'SelectOption';`;
