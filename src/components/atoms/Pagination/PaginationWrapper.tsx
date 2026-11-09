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

interface Props extends HTMLAttributes<HTMLElement>, RefAttributes<HTMLElement> {
    options: {
        currentPage: number;
        endPage: number;
        setPage: Dispatch<SetStateAction<number>>;
    };
    disabled?: boolean;
    className?: string;
}

export const PaginationWrapper = forwardRef<HTMLElement, Props>(
    ({ options, disabled = false, className = '', ...props }, ref) => {
        return (
            !disabled && (
                <nav
                    ref={ref}
                    {...props}
                    aria-label="Pagination"
                    className={cn('relative flex w-full justify-center gap-1', className)}
                >
                    {Children.map(props.children, (child) => {
                        return isValidElement(child)
                            ? cloneElement(child as ReactElement<Record<string, unknown>>, { options })
                            : child;
                    })}
                </nav>
            )
        );
    }
);

PaginationWrapper.displayName = 'PaginationWrapper';
