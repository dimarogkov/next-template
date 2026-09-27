export const SELECT_TYPE_CODE = `export interface ISelectItem {
  value: string;
  label: string;
}`;

export const SELECT_UTILS_CODE = `import { MutableRefObject, Ref } from 'react';

export const assignRefs =
  (...refs: (Ref<HTMLSelectElement> | undefined)[]) =>
  (node: HTMLSelectElement) => {
    refs.forEach((r) => {
      if (!r) {
        return;
      }

      if (typeof r === 'function') {
        r(node);
      } else {
        (r as MutableRefObject<HTMLSelectElement | null>).current = node;
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
import { assignRefs } from '@utils';
import { ISelectItem } from '@interfaces/SelectItem';
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
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
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
             isOpen: isSelectOpen,
             isMultiple,
             selectedItems,
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
import { Text } from '@components/atoms';
import { ChevronDown, LucideProps } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  placeholder?: string;
  isOpen?: boolean;
  isMultiple?: boolean;
  selectedItems?: ISelectItem[];
  className?: string;
  icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectTrigger = forwardRef<HTMLDivElement, Props>(
  (
    {
      placeholder = 'Select',
      isOpen,
      isMultiple,
      selectedItems,
      icon,
      setIsOpen = () => {},
      setSelectedItems,
      className = '',
      ...props
    },
    ref
  ) => {
    const selectedText = selectedItems?.map((item) => item.label).join(', ');
    const hasValue = !!selectedItems?.length;
    const Icon = icon || ChevronDown;

    const toggleOpen = () => setIsOpen((prevState) => !prevState);

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleOpen();
      }
    };

    return (
      <div
        ref={ref}
        {...props}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
        className={cn(
          'border-border relative flex h-10 w-full cursor-pointer items-center rounded-md border px-4 pr-12 select-none',
          className
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
  ReactElement,
  ReactNode,
  RefAttributes,
  SetStateAction
} from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { ISelectItem } from '@interfaces/SelectItem';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
  isOpen?: boolean;
  isMultiple?: boolean;
  selectedItems?: ISelectItem[];
  className?: string;
  children?: ReactNode;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectOptions = forwardRef<HTMLDivElement, Props>(
  (
    {
      isOpen,
      isMultiple,
      selectedItems,
      setIsOpen = () => {},
      setSelectedItems = () => {},
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const animation: HTMLMotionProps<'div'> = {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
      exit: { scale: 0.95, opacity: 0 }
    };

    return (
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            ref={ref}
            {...props}
            {...animation}
            className={cn(
              'border-border bg-bg absolute top-[calc(100%+4px)] z-10 flex max-h-73 w-max max-w-[calc(100vw-32px)] min-w-full flex-col gap-1 overflow-auto rounded-md border p-1 will-change-transform',
              className
            )}
          >
            {Children.map(children, (child) => {
              return isValidElement(child)
                ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                   isOpen,
                   isMultiple,
                   selectedItems,
                   setIsOpen,
                   setSelectedItems
                 })
                : child;
            })}
          </motion.div>
        )}
      </AnimatePresence>
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
  SetStateAction
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  isOpen?: boolean;
  isMultiple?: boolean;
  selectedItems?: ISelectItem[];
  className?: string;
  children?: ReactNode;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectGroup = forwardRef<HTMLDivElement, Props>(
  (
    {
      isOpen,
      isMultiple,
      selectedItems,
      setIsOpen = () => {},
      setSelectedItems = () => {},
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} {...props} className={cn('relative flex flex-col gap-1', className)}>
        {Children.map(children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, {
               isOpen,
               isMultiple,
               selectedItems,
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
  isOpen?: boolean;
  isMultiple?: boolean;
  selectedItems?: ISelectItem[];
  className?: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectLabel = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, isMultiple, selectedItems, setIsOpen, setSelectedItems, className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={cn('relative px-2 py-1 text-sm', className)} />;
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
  isOpen?: boolean;
  isMultiple?: boolean;
  selectedItems?: ISelectItem[];
  className?: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setSelectedItems?: (item: ISelectItem) => void;
}

export const SelectOption = forwardRef<HTMLSpanElement, Props>(
  (
    {
      value,
      isOpen,
      isMultiple,
      selectedItems,
      setIsOpen = () => {},
      setSelectedItems = () => {},
      className = '',
      ...props
    },
    ref
  ) => {
    const isActive = selectedItems?.some((item) => value === item.value) || false;

    const selectItem = () => {
      setSelectedItems({ value, label: props.children as string });
      !isMultiple && setIsOpen(false);
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
        tabIndex={0}
        aria-selected={isActive}
        onClick={selectItem}
        onKeyDown={onKeyDown}
        className={cn(
          'text-title relative flex w-full cursor-pointer items-center rounded-md px-2 py-1 pr-8',
          className,
          {
            'hover:bg-border transition-colors duration-300': !isActive || (isActive && isMultiple),
            'bg-border pointer-events-none': isActive && !isMultiple
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

SelectOption.displayName = 'SelectOption';

SelectOption.displayName = 'SelectOption';`;
