export const DROPDOWN_CODE = `import DropdownWrapper from './DropdownWrapper';
import DropdownTrigger from './DropdownTrigger';
import DropdownContent from './DropdownContent';

export const Dropdown = Object.assign(DropdownWrapper, {
    Trigger: DropdownTrigger,
    Content: DropdownContent,
});`;

export const DROPDOWN_WRAPPER_CODE = `'use client';
import {
    Children,
    cloneElement,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

const DropdownWrapper = forwardRef<HTMLDivElement, Props>(({ isOpen = false, className = '', ...props }, ref) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div ref={ref || dropdownRef} {...props} className={\`relative \${className}\`}>
            {Children.map(props.children, (child) => {
                return isValidElement(child)
                    ? cloneElement(child as ReactElement, {
                          isOpen: isDropdownOpen,
                          setIsOpen: setIsDropdownOpen,
                      })
                    : child;
            })}
        </div>
    );
});

DropdownWrapper.displayName = 'DropdownWrapper';
export default DropdownWrapper;`;

export const DROPDOWN_TRIGGER_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownTrigger = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={\`relative cursor-pointer list-none \${className}\`}
            />
        );
    }
);

DropdownTrigger.displayName = 'DropdownTrigger';
export default DropdownTrigger;`;

export const DROPDOWN_CONTENT_CODE = `'use client';
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
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    align?: 'start' | 'end';
    position?: 'bottom' | 'left' | 'right' | 'top';
    isOpen?: boolean;
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownContent = forwardRef<HTMLDivElement, Props>(
    (
        { align = 'start', position = 'bottom', isOpen, className = '', children, setIsOpen = () => {}, ...props },
        ref
    ) => {
        const isVerticalPosition = position === 'top' || position === 'bottom';
        const isHorizontalPosition = position === 'left' || position === 'right';

        const animation: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 },
        };

        const dropdownContentStyle = {
            ...(position === 'top' && {
                bottom: 'calc(100% + 4px)',
                transformOrigin: 'bottom left',
            }),
            ...(position === 'right' && {
                left: 'calc(100% + 4px)',
                transformOrigin: 'top left',
            }),
            ...(position === 'bottom' && {
                top: 'calc(100% + 4px)',
                transformOrigin: 'top left',
            }),
            ...(position === 'left' && {
                right: 'calc(100% + 4px)',
                transformOrigin: 'top right',
            }),
        };

        return (
            <AnimatePresence mode='wait'>
                {isOpen && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={cn(
                            \`absolute z-10 min-w-full max-w-[calc(100vw-32px)] w-max rounded-md p-1 border border-border bg-bg will-change-transform \${className}\`,
                            {
                                'left-0': align === 'start' && isVerticalPosition,
                                'top-0': align === 'start' && isHorizontalPosition,
                                'right-0': align === 'end' && isVerticalPosition,
                                'bottom-0': align === 'end' && isHorizontalPosition,
                            }
                        )}
                        style={dropdownContentStyle}
                    >
                        {Children.map(children, (child) => {
                            return isValidElement(child)
                                ? cloneElement(child as ReactElement, { isOpen, setIsOpen })
                                : child;
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

DropdownContent.displayName = 'DropdownContent';
export default DropdownContent;`;

export const DROPDOWN_MENU_CODE = `'use client';
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
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownMenu = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div ref={ref} {...props} className={\`relative flex flex-col gap-1 w-full \${className}\`}>
                {Children.map(props.children, (child) => {
                    return isValidElement(child) ? cloneElement(child as ReactElement, { isOpen, setIsOpen }) : child;
                })}
            </div>
        );
    }
);

DropdownMenu.displayName = 'DropdownMenu';
export default DropdownMenu;`;

export const DROPDOWN_LABEL_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Text } from '../Text';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownLabel = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div ref={ref} {...props} className={\`relative px-2 py-1 \${className}\`}>
                <Text className='!text-title'>{props.children}</Text>
            </div>
        );
    }
);

DropdownLabel.displayName = 'DropdownLabel';
export default DropdownLabel;`;

export const DROPDOWN_SEPARATOR_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Separator } from '../Separator';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownSeparator = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return <Separator ref={ref} {...props} className={\`!w-auto -mx-1 \${className}\`} />;
    }
);

DropdownSeparator.displayName = 'DropdownSeparator';
export default DropdownSeparator;`;

export const DROPDOWN_ITEM_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Text } from '../Text';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownItem = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen(false)}
                className={\`relative cursor-pointer rounded-md px-2 py-1 transition-colors duration-300 hover:bg-border \${className}\`}
            >
                <Text className='!text-title'>{props.children}</Text>
            </div>
        );
    }
);

DropdownItem.displayName = 'DropdownItem';
export default DropdownItem;`;

export const DROPDOWN_SUB_MENU_CODE = `'use client';
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
    useState,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownSubMenu = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

        return (
            <div
                ref={ref}
                {...props}
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setIsSubDropdownOpen(true)}
                onMouseLeave={() => setIsSubDropdownOpen(false)}
                className={\`relative \${className}\`}
            >
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement, {
                              isOpen,
                              isSubOpen: isSubDropdownOpen,
                              setIsOpen,
                          })
                        : child;
                })}
            </div>
        );
    }
);

DropdownSubMenu.displayName = 'DropdownSubMenu';
export default DropdownSubMenu;`;

export const DROPDOWN_SUB_TRIGGER_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { Text } from '../Text';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isSubOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownSubTrigger = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, isSubOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={cn(
                    \`relative flex items-center justify-between cursor-pointer rounded-md px-2 py-1 transition-colors duration-300 hover:bg-border \${className}\`,
                    {
                        'bg-border': isSubOpen,
                    }
                )}
            >
                <Text className='!w-fit !text-title'>{props.children}</Text>
                <ChevronRight className='size-4' />
            </div>
        );
    }
);

DropdownSubTrigger.displayName = 'DropdownSubTrigger';
export default DropdownSubTrigger;`;

export const DROPDOWN_SUB_CONTENT_CODE = `'use client';
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

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isSubOpen?: boolean;
    className?: string;
    children?: ReactNode;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const DropdownSubContent = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, isSubOpen, className = '', children, setIsOpen = () => {}, ...props }, ref) => {
        const animation: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 },
        };

        return (
            <AnimatePresence mode='wait'>
                {isSubOpen && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={\`absolute top-[calc(100%+4px)] sm:-top-[1px] sm:left-[calc(100%+4px)] z-10 min-w-full max-w-[calc(100vw-32px)] w-max rounded-md p-1 border border-border bg-bg origin-top-left will-change-transform \${className}\`}
                    >
                        {Children.map(children, (child) => {
                            return isValidElement(child)
                                ? cloneElement(child as ReactElement, { isOpen, setIsOpen })
                                : child;
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

DropdownSubContent.displayName = 'DropdownSubContent';
export default DropdownSubContent;`;
