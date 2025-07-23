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
    useEffect,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    iconType?: 'arrow' | 'plus';
    accordionIndex?: number;
    activeIndex?: number;
    isOpen?: boolean;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

const AccordionItem: FC<Props> = forwardRef<HTMLDivElement, Props>(
    (
        { iconType, accordionIndex = 0, activeIndex, isOpen, className = '', setActiveIndex = () => {}, ...props },
        ref
    ) => {
        useEffect(() => {
            isOpen && setActiveIndex(accordionIndex);
        }, [accordionIndex, isOpen, setActiveIndex]);

        return (
            <div
                ref={ref}
                {...props}
                className={`relative w-full border-b border-border last:border-b-0 overflow-hidden ${className}`}
            >
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            iconType,
                            accordionIndex,
                            activeIndex,
                            setActiveIndex,
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
);

AccordionItem.displayName = 'AccordionItem';
export default AccordionItem;
