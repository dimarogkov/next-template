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
    SetStateAction
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    options: {
        currentPage: number;
        endPage: number;
        setPage: Dispatch<SetStateAction<number>>;
    };
    disabled?: boolean;
    className?: string;
}

export const PaginationWrapper = forwardRef<HTMLDivElement, Props>(
    ({ options, disabled = false, className = '', ...props }, ref) => {
        return (
            <>
                {!disabled && (
                    <div ref={ref} {...props} className={cn('relative flex w-full justify-center gap-1', className)}>
                        {Children.map(props.children, (child) => {
                            return isValidElement(child)
                                ? cloneElement(child as ReactElement<any>, { options })
                                : child;
                        })}
                    </div>
                )}
            </>
        );
    }
);

PaginationWrapper.displayName = 'PaginationWrapper';
