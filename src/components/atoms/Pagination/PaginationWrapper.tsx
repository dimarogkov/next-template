'use client';
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
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    options: {
        currentPage: number;
        endPage: number;
        setPage: Dispatch<SetStateAction<number>>;
    };
    disabled?: boolean;
    className?: string;
}

const PaginationWrapper = forwardRef<HTMLDivElement, Props>(
    ({ options, disabled = false, className = '', ...props }, ref) => {
        return (
            <>
                {!disabled && (
                    <div ref={ref} {...props} className={`relative flex justify-center gap-1 w-full ${className}`}>
                        {Children.map(props.children, (child) => {
                            return isValidElement(child) ? cloneElement(child as ReactElement, { options }) : child;
                        })}
                    </div>
                )}
            </>
        );
    }
);

PaginationWrapper.displayName = 'PaginationWrapper';
export default PaginationWrapper;
