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
import { EnumDropdownAlign, EnumDropdownPosition } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    align?: EnumDropdownAlign;
    position?: EnumDropdownPosition;
    skipPropsToChildren?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownContent: FC<Props> = forwardRef<HTMLDivElement, Props>(
    (
        {
            align = EnumDropdownAlign.start,
            position = EnumDropdownPosition.bottom,
            skipPropsToChildren = false,
            setIsOpen = () => {},
            className = '',
            ...props
        },
        ref
    ) => {
        const isVerticalPosition = position === EnumDropdownPosition.top || position === EnumDropdownPosition.bottom;
        const isHorizontalPosition = position === EnumDropdownPosition.left || position === EnumDropdownPosition.right;

        const dropdownContentStyle = {
            ...(position === EnumDropdownPosition.top && {
                bottom: 'calc(100% + 4px)',
            }),
            ...(position === EnumDropdownPosition.right && {
                left: 'calc(100% + 4px)',
            }),
            ...(position === EnumDropdownPosition.bottom && {
                top: 'calc(100% + 4px)',
            }),
            ...(position === EnumDropdownPosition.left && {
                right: 'calc(100% + 4px)',
            }),
        };

        return (
            <div
                ref={ref}
                {...props}
                className={cn(`absolute z-10 min-w-full w-max rounded p-2.5 border border-gray bg-white ${className}`, {
                    'left-0': align === EnumDropdownAlign.start && isVerticalPosition,
                    'top-0': align === EnumDropdownAlign.start && isHorizontalPosition,
                    'right-0': align === EnumDropdownAlign.end && isVerticalPosition,
                    'bottom-0': align === EnumDropdownAlign.end && isHorizontalPosition,
                })}
                style={dropdownContentStyle}
            >
                {Children.map(props.children, (child) => {
                    if (isValidElement(child) && !skipPropsToChildren) {
                        return cloneElement(child as ReactElement, { setIsOpen });
                    }

                    return child;
                })}
            </div>
        );
    }
);

DropdownContent.displayName = 'DropdownContent';
export default DropdownContent;
