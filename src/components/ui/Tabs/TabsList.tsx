'use client';
import {
    Children,
    cloneElement,
    Dispatch,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    SetStateAction,
} from 'react';

interface Props extends HTMLAttributes<HTMLUListElement>, RefAttributes<HTMLUListElement> {
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

const TabsList: FC<Props> = forwardRef<HTMLUListElement, Props>(
    ({ activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <ul ref={ref} {...props} className={`relative flex w-full ${className}`}>
                {Children.map(props.children, (child, index) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, { tabIndex: index, activeIndex, setActiveIndex });
                    }

                    return child;
                })}
            </ul>
        );
    }
);

TabsList.displayName = 'TabsList';
export default TabsList;
