export const SELECT_TYPE_CODE = `export interface ISelectItem {
    value: string;
    label: string;
}`;

export const SELECT_CODE = `import SelectWrapper from './SelectWrapper';
import SelectTrigger from './SelectTrigger';
import SelectOptions from './SelectOptions';
import SelectOption from './SelectOption';

export const Select = Object.assign(SelectWrapper, {
    Trigger: SelectTrigger,
    Options: SelectOptions,
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
    useRef,
    useState,
} from 'react';
import { ISelectItem } from '@interfaces/SelectItem';

interface Props extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
    className?: string;
}

const SelectWrapper = forwardRef<HTMLSelectElement, Props>(({ className = '', ...props }, ref) => {
    const [selectedItem, setSelectedItem] = useState<ISelectItem>({ value: '', label: '' });
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        const optionsArr = (Children.toArray(props.children) as ReactElement[])[1]?.props?.children ?? [];
        const currentOption = optionsArr.find((child: ReactElement) => child.props.value === props.value);

        currentOption && setSelectedItem({ value: currentOption.props.value, label: currentOption.props.children });
    }, [props.value, props.children]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsSelectOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={wrapperRef} className={\`relative w-full \${className}\`}>
            <select ref={ref || selectRef} {...props} className='hidden' tabIndex={-1} aria-hidden>
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return Children.map(child.props.children, (option: ReactElement) => (
                            <option key={option.props.value} value={option.props.value}>
                                {option.props.children}
                            </option>
                        ));
                    }

                    return null;
                })}
            </select>

            {Children.map(props.children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, {
                        isOpen: isSelectOpen,
                        selectedItem,
                        setIsOpen: setIsSelectOpen,
                        setSelectedItem: (item: ISelectItem) => {
                            setSelectedItem(item);
                            props.onChange?.({
                                ...new Event('change', { bubbles: true }),
                                target: {
                                    name: props.name,
                                    value: item.value,
                                },
                            } as unknown as React.ChangeEvent<HTMLSelectElement>);
                        },
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
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import { Text } from '@components/atoms';
import { ChevronDown } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    placeholder?: string;
    isOpen?: boolean;
    selectedItem?: ISelectItem;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItem?: Dispatch<SetStateAction<ISelectItem>>;
}

const SelectTrigger = forwardRef<HTMLDivElement, Props>(
    (
        {
            placeholder = 'Select',
            isOpen,
            selectedItem,
            setIsOpen = () => {},
            setSelectedItem = () => {},
            className = '',
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={\`relative flex items-center w-full h-10 px-4 pr-12 rounded-md cursor-pointer select-none border border-border \${className}\`}
            >
                <Text className={cn({ 'text-white': selectedItem?.value !== '' })}>
                    {selectedItem?.label || placeholder}
                </Text>

                <ChevronDown className='absolute right-4 size-5' />
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
    selectedItem?: ISelectItem;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItem?: Dispatch<SetStateAction<ISelectItem>>;
    children?: ReactNode;
}

const SelectOptions = forwardRef<HTMLDivElement, Props>(
    (
        { isOpen, selectedItem, setIsOpen = () => {}, setSelectedItem = () => {}, className = '', children, ...props },
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
                        className={\`absolute top-[calc(100%+4px)] z-10 flex flex-col gap-1 min-w-full max-w-[calc(100vw-32px)] w-max rounded-md p-1 border border-border bg-bg will-change-transform \${className}\`}
                    >
                        {Children.map(children, (child) => {
                            if (isValidElement(child)) {
                                return cloneElement(child as ReactElement, {
                                    isOpen,
                                    selectedItem,
                                    setIsOpen,
                                    setSelectedItem,
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

export const SELECT_OPTION_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { ISelectItem } from '@interfaces/SelectItem';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    value?: string;
    isOpen?: boolean;
    selectedItem?: ISelectItem;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItem?: Dispatch<SetStateAction<ISelectItem>>;
}

const SelectOption = forwardRef<HTMLSpanElement, Props>(
    (
        {
            value = '',
            isOpen,
            selectedItem,
            setIsOpen = () => {},
            setSelectedItem = () => {},
            className = '',
            ...props
        },
        ref
    ) => {
        const SelectItem = () => {
            setSelectedItem({ value, label: props.children as string });
            setIsOpen(false);
        };

        return (
            <span
                ref={ref}
                {...props}
                onClick={SelectItem}
                className={cn(
                    \`relative flex items-center w-full rounded-md pr-8 px-2 py-1 text-title cursor-pointer \${className}\`,
                    {
                        'transition-colors duration-300 hover:bg-border': value !== selectedItem?.value,
                        'bg-border pointer-events-none': value === selectedItem?.value,
                    }
                )}
            >
                {props.children}

                <Check
                    className={cn('absolute right-2 size-4 text-text transition-all duration-300', {
                        'opacity-0 invisible': value !== selectedItem?.value,
                        'opacity-100 visible': value === selectedItem?.value,
                    })}
                />
            </span>
        );
    }
);

SelectOption.displayName = 'SelectOption';
export default SelectOption;`;
