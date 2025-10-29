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

export const SELECT_CODE = `import SelectWrapper from './SelectWrapper';
import SelectTrigger from './SelectTrigger';
import SelectOptions from './SelectOptions';
import SelectGroup from './SelectGroup';
import SelectLabel from './SelectLabel';
import SelectOption from './SelectOption';

export const Select = Object.assign(SelectWrapper, {
    Trigger: SelectTrigger,
    Options: SelectOptions,
    Group: SelectGroup,
    Label: SelectLabel,
    Option: SelectOption,
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
    useState,
} from 'react';
import { assignRefs } from '@utils';
import { ISelectItem } from '@interfaces/SelectItem';

interface Props extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
    className?: string;
}

const SelectWrapper = forwardRef<HTMLSelectElement, Props>(({ className = '', ...props }, ref) => {
    const [selectedItems, setSelectedItems] = useState<ISelectItem[]>([]);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const mergedRef = assignRefs(ref, selectRef);
    const isMultiple = !!props.multiple;

    const optionsArr = useMemo(() => {
        const getOptions = (node: React.ReactNode): ReactElement[] =>
            Children.toArray(node).flatMap((child) =>
                isValidElement(child)
                    ? (child.type as any)?.displayName === 'SelectOption'
                        ? [child]
                        : getOptions(child.props?.children)
                    : []
            );

        return getOptions(props.children).map((el) => el.props);
    }, [props.children]);

    useEffect(() => {
        const currentOption = optionsArr.find((option) => option.value === props.value);

        if (currentOption) {
            setSelectedItems([{ value: currentOption.value, label: currentOption.children }]);
        }
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
        <div ref={wrapperRef} className={\`relative w-full \${className}\`}>
            <select
                ref={mergedRef}
                {...props}
                name={props.name || 'select'}
                className='hidden'
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
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, {
                        isOpen: isSelectOpen,
                        isMultiple,
                        selectedItems,
                        setIsOpen: setIsSelectOpen,
                        setSelectedItems: handleSelectedItems,
                    });
                }

                return child;
            })}
        </div>
    );
});

SelectWrapper.displayName = 'SelectWrapper';
export default SelectWrapper;`;

export const SELECT_TRIGGER_CODE = `'use client';
import { Dispatch, forwardRef, ForwardRefExoticComponent, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
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

const SelectTrigger = forwardRef<HTMLDivElement, Props>(
    (
        {
            placeholder = 'Select',
            isOpen,
            isMultiple,
            selectedItems,
            icon,
            setIsOpen = () => {},
            setSelectedItems = () => {},
            className = '',
            ...props
        },
        ref
    ) => {
        const selectedText = selectedItems?.map((item) => item.label).join(', ');
        const hasValue = !!selectedItems?.length;
        const Icon = icon || ChevronDown;

        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={\`relative flex items-center w-full h-10 px-4 pr-12 rounded-md cursor-pointer select-none border border-border \${className}\`}
            >
                <Text className={cn({ 'text-title': hasValue })}>{hasValue ? selectedText : placeholder}</Text>
                <Icon className='absolute right-4 size-5' />
            </div>
        );
    }
);

SelectTrigger.displayName = 'SelectTrigger';
export default SelectTrigger;`;

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
    SetStateAction,
} from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { ISelectItem } from '@interfaces/SelectItem';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

const SelectOptions = forwardRef<HTMLDivElement, Props>(
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
            exit: { scale: 0.95, opacity: 0 },
        };

        return (
            <AnimatePresence mode='wait'>
                {isOpen && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={\`absolute top-[calc(100%+4px)] z-10 flex flex-col gap-1 min-w-full max-w-[calc(100vw-32px)] w-max max-h-[292px] overflow-auto rounded-md p-1 border border-border bg-bg will-change-transform \${className}\`}
                    >
                        {Children.map(children, (child) => {
                            if (isValidElement(child)) {
                                return cloneElement(child as ReactElement, {
                                    isOpen,
                                    isMultiple,
                                    selectedItems,
                                    setIsOpen,
                                    setSelectedItems,
                                });
                            }

                            return child;
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

SelectOptions.displayName = 'SelectOptions';
export default SelectOptions;`;

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
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

const SelectGroup = forwardRef<HTMLDivElement, Props>(
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
            <div ref={ref} {...props} className={\`relative flex flex-col gap-1 \${className}\`}>
                {Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            isOpen,
                            isMultiple,
                            selectedItems,
                            setIsOpen,
                            setSelectedItems,
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
);

SelectGroup.displayName = 'SelectGroup';
export default SelectGroup;`;

export const SELECT_LABEL_CODE = `'use client';
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
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isMultiple?: boolean;
    selectedItems?: ISelectItem[];
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItems?: (item: ISelectItem) => void;
}

const SelectLabel = forwardRef<HTMLDivElement, Props>(
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
            <div ref={ref} {...props} className={\`relative text-sm px-2 py-1 \${className}\`}>
                {Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            isOpen,
                            isMultiple,
                            selectedItems,
                            setIsOpen,
                            setSelectedItems,
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
);

SelectLabel.displayName = 'SelectLabel';
export default SelectLabel;`;

export const SELECT_OPTION_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
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

const SelectOption = forwardRef<HTMLSpanElement, Props>(
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

        return (
            <span
                ref={ref}
                {...props}
                onClick={selectItem}
                className={cn(
                    \`relative flex items-center w-full rounded-md pr-8 px-2 py-1 text-title cursor-pointer \${className}\`,
                    {
                        'transition-colors duration-300 hover:bg-border': !isActive || (isActive && isMultiple),
                        'bg-border pointer-events-none': isActive && !isMultiple,
                    }
                )}
            >
                {props.children}

                <Check
                    className={cn('absolute right-2 size-4 text-text transition-all duration-300', {
                        'opacity-0 invisible': !isActive,
                        'opacity-100 visible': isActive,
                    })}
                />
            </span>
        );
    }
);

SelectOption.displayName = 'SelectOption';
export default SelectOption;`;
