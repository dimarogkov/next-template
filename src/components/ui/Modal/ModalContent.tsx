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
import ModalLayer from './ModalLayer';
import ModalClose from './ModalClose';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    skipPropsToChildren?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const ModalContent: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, skipPropsToChildren = false, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div
                className={cn(
                    'fixed z-20 top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-300',
                    {
                        'opacity-0 invisible': !isOpen,
                        'opacity-100 visible': isOpen,
                    }
                )}
            >
                <ModalLayer setIsOpen={setIsOpen} />

                <div
                    ref={ref}
                    {...props}
                    className={cn(
                        `relative md:w-[600px] max-w-[calc(100%-32px)] p-5 rounded-lg bg-white transition-transform duration-300 ${className}`,
                        {
                            'translate-y-10': !isOpen,
                            'translate-y-0': isOpen,
                        }
                    )}
                >
                    <ModalClose onClick={() => setIsOpen(false)} />

                    {Children.map(props.children, (child) => {
                        if (isValidElement(child) && !skipPropsToChildren) {
                            return cloneElement(child as ReactElement, { setIsOpen });
                        }

                        return child;
                    })}
                </div>
            </div>
        );
    }
);

ModalContent.displayName = 'ModalContent';
export default ModalContent;
