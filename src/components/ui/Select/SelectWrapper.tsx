'use client';
import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    isValidElement,
    ReactElement,
    RefAttributes,
    SelectHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';
import { ISelectItem } from '@/src/types/interfaces/SelectItem';

interface Props extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
    className?: string;
}

const SelectWrapper: FC<Props> = forwardRef<HTMLSelectElement, Props>(({ className = '', ...props }, ref) => {
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
        <div ref={wrapperRef} className={`relative w-full ${className}`}>
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
export default SelectWrapper;
