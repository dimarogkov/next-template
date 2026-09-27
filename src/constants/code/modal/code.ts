export const MODAL_CODE = `import { ModalWrapper } from './ModalWrapper';
import { ModalTrigger } from './ModalTrigger';
import { ModalContent } from './ModalContent';

export const Modal = Object.assign(ModalWrapper, {
  Trigger: ModalTrigger,
  Content: ModalContent
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
  useState
} from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const ModalWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsModalOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('lock', isModalOpen);

    return () => {
      document.body.classList.remove('lock');
    };
  }, [isModalOpen]);

  return (
    <div ref={ref} {...props} className={cn('relative w-fit', className)}>
      {Children.map(props.children, (child) => {
        return isValidElement(child)
          ? cloneElement(child as ReactElement<Record<string, unknown>>, {
             isOpen: isModalOpen,
             setIsOpen: setIsModalOpen
           })
          : child;
      })}
    </div>
  );
});

ModalWrapper.displayName = 'ModalWrapper';`;

export const MODAL_TRIGGER_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, KeyboardEvent, RefAttributes, SetStateAction } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  isOpen?: boolean;
  className?: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const ModalTrigger = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
    const openModal = () => setIsOpen(true);

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    };

    return (
      <div
        ref={ref}
        {...props}
        role="button"
        tabIndex={0}
        onClick={openModal}
        onKeyDown={onKeyDown}
        className={cn('relative cursor-pointer list-none', className)}
      />
    );
  }
);

ModalTrigger.displayName = 'ModalTrigger';`;

export const MODAL_CONTENT_CODE = `'use client';
import { Dispatch, forwardRef, ReactNode, RefAttributes, SetStateAction } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { ModalLayer } from './ModalLayer';
import { ModalClose } from './ModalClose';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
  isOpen?: boolean;
  disableCloseBtn?: boolean;
  children?: ReactNode;
  className?: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const ModalContent = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, disableCloseBtn = false, children, className = '', setIsOpen = () => {}, ...props }, ref) => {
    const animation: HTMLMotionProps<'div'> = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] } },
      exit: { opacity: 0 }
    };

    const animationPopup: HTMLMotionProps<'div'> = {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
      exit: { scale: 0.95, opacity: 0 }
    };

    return (
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            {...animation}
            className="fixed top-0 left-0 z-20 flex h-svh w-full items-center justify-center"
          >
            <ModalLayer setIsOpen={setIsOpen} />

            <motion.div
              ref={ref}
              {...props}
              {...animationPopup}
              className={cn(
                'border-border bg-bg relative max-w-[calc(100%-32px)] overflow-hidden rounded-md border will-change-transform md:w-150',
                className
              )}
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

ModalContent.displayName = 'ModalContent';`;

export const MODAL_LAYER_CODE = `'use client';
import { Dispatch, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalLayer = forwardRef<HTMLDivElement, Props>(({ setIsOpen = () => {}, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      onClick={() => setIsOpen(false)}
      aria-hidden="true"
      className="absolute top-0 left-0 h-full w-full bg-black/60"
    />
  );
});

ModalLayer.displayName = 'ModalLayer';`;

export const MODAL_CLOSE_CODE = `'use client';
import { ButtonHTMLAttributes, forwardRef, RefAttributes } from 'react';
import { X } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {}

export const ModalClose = forwardRef<HTMLButtonElement, Props>(({ ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className="absolute top-2.5 right-2.5 z-10 size-5 cursor-pointer outline-hidden transition-opacity duration-300 hover:opacity-75"
    >
      <X className="text-text h-full w-full" />
    </button>
  );
});

ModalClose.displayName = 'ModalClose';`;
