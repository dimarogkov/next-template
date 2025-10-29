'use client';
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
        <div ref={wrapperRef} className={`relative w-full ${className}`}>
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
export default SelectWrapper;
