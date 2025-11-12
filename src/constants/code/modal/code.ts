export const MODAL_CODE = `import ModalWrapper from './ModalWrapper';
import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';

export const Modal = Object.assign(ModalWrapper, {
    Trigger: ModalTrigger,
    Content: ModalContent,
});`;

export const MODAL_WRAPPER_CODE = `'use client';
import {
    Children,
    cloneElement,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useEffect,
    useState,
} from 'react';
import { usePathname } from 'next/navigation';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const ModalWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsModalOpen(false);
    }, [pathname]);

    useEffect(() => {
        const bodyClassList = document.body.classList;
        isModalOpen ? bodyClassList.add('lock') : bodyClassList.remove('lock');
    }, [isModalOpen]);

    return (
        <div ref={ref} {...props} className={\`relative w-fit \${className}\`}>
            {Children.map(props.children, (child) => {
                return isValidElement(child)
                    ? cloneElement(child as ReactElement, { isOpen: isModalOpen, setIsOpen: setIsModalOpen })
                    : child;
            })}
        </div>
    );
});

ModalWrapper.displayName = 'ModalWrapper';
export default ModalWrapper;`;

export const MODAL_TRIGGER_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const ModalTrigger = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen(true)}
                className={\`relative cursor-pointer list-none \${className}\`}
            />
        );
    }
);

ModalTrigger.displayName = 'ModalTrigger';
export default ModalTrigger;`;

export const MODAL_CONTENT_CODE = `'use client';
import { Dispatch, forwardRef, ReactNode, RefAttributes, SetStateAction } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import ModalLayer from './ModalLayer';
import ModalClose from './ModalClose';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    disableCloseBtn?: boolean;
    children: ReactNode;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const ModalContent = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, disableCloseBtn = false, children, className = '', setIsOpen = () => {}, ...props }, ref) => {
        const animation: HTMLMotionProps<'div'> = {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] } },
            exit: { opacity: 0 },
        };

        const animationPopup: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 },
        };

        return (
            <AnimatePresence mode='wait'>
                {isOpen && (
                    <motion.div
                        {...animation}
                        className='fixed z-20 top-0 left-0 flex items-center justify-center w-full h-svh'
                    >
                        <ModalLayer setIsOpen={setIsOpen} />

                        <motion.div
                            ref={ref}
                            {...props}
                            {...animationPopup}
                            className={\`relative md:w-[600px] max-w-[calc(100%-32px)] rounded-md border border-border bg-bg overflow-hidden will-change-transform \${className}\`}
                        >
                            {!disableCloseBtn && <ModalClose onClick={() => setIsOpen(false)} />}
                            {children}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

ModalContent.displayName = 'ModalContent';
export default ModalContent;`;

export const MODAL_LAYER_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalLayer = forwardRef<HTMLDivElement, Props>(({ setIsOpen = () => {}, ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            onClick={() => setIsOpen(false)}
            className='absolute top-0 left-0 w-full h-full bg-black/60'
        />
    );
});

ModalLayer.displayName = 'ModalLayer';
export default ModalLayer;`;

export const MODAL_CLOSE_CODE = `'use client';
import { ButtonHTMLAttributes, forwardRef, RefAttributes } from 'react';
import { X } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {}

const ModalClose = forwardRef<HTMLButtonElement, Props>(({ ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            className='absolute z-10 top-2.5 right-2.5 size-5 outline-none transition-opacity duration-300 hover:opacity-75'
        >
            <X className='w-full h-full text-text' />
        </button>
    );
});

ModalClose.displayName = 'ModalClose';
export default ModalClose;`;
