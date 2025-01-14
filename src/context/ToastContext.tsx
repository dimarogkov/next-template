'use client';
import { createContext, FC, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { IToast } from '../types/interfaces/Toast';
import { Toast } from '../components/ui';

interface Props {
    children: ReactNode;
}

interface ToastContextValue {
    createToast: (toast: IToast, duration: number) => void;
    closeToast: (toastId: string) => void;
}
const ToastContext = createContext<ToastContextValue>({
    createToast: () => {},
    closeToast: () => {},
});

export const ToastProvider: FC<Props> = ({ children }) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    const closeToast = useCallback((toastId: string) => {
        setToasts((prev) => {
            const filteredToasts = prev.filter(({ id }) => id !== toastId);
            return filteredToasts;
        });
    }, []);

    const createToast = useCallback(
        (toast: IToast, duration: number) => {
            const timeoutId = setTimeout(() => closeToast(toast.id), duration);
            setToasts((prev) => [{ ...toast, timeoutId }, ...prev]);
        },
        [closeToast]
    );

    const value = useMemo(() => ({ closeToast, createToast }), [createToast, closeToast]);

    return (
        <ToastContext.Provider value={value}>
            {children}

            {toasts.length > 0 && (
                <div className='fixed z-10 bottom-0 sm:bottom-2 md:bottom-3 right-0 sm:right-2 md:right-3 flex flex-col items-end gap-2 w-full sm:w-auto p-4 sm:p-0'>
                    {toasts.map((toast) => (
                        <Toast key={toast.id} toast={toast} closeToast={closeToast} />
                    ))}
                </div>
            )}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
