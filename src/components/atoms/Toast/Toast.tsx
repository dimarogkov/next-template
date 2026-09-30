'use client';
import toast, { type Toast as TostType } from 'react-hot-toast';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { IToastData } from '@interfaces/ToastData';
import { Text } from '@components/atoms';
import { CircleAlert, CircleCheck, CircleX, Info, X } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    toast: TostType;
    type?: 'default' | 'success' | 'warning' | 'error';
    data: IToastData;
    className?: string;
}

export const Toast = forwardRef<HTMLDivElement, Props>(
    ({ toast: t, type = 'default', data, className = '', ...props }, ref) => {
        const { title, text } = data;

        const toastClasses = {
            border: {
                default: 'border-l-text',
                success: 'border-l-green',
                warning: 'border-l-yellow',
                error: 'border-l-red'
            },
            text: {
                default: 'text-title',
                success: 'text-green',
                warning: 'text-yellow',
                error: 'text-red'
            }
        };

        const icon = {
            default: <Info className="text-title hidden size-9 min-w-9 stroke-1 sm:block" />,
            success: <CircleCheck className="text-green hidden size-9 min-w-9 stroke-1 sm:block" />,
            warning: <CircleAlert className="text-yellow hidden size-9 min-w-9 stroke-1 sm:block" />,
            error: <CircleX className="text-red hidden size-9 min-w-9 stroke-1 sm:block" />
        };

        return (
            <div
                ref={ref}
                {...props}
                className={cn(
                    'border-border bg-bg relative flex w-full items-center gap-3 rounded-md border border-l-4 p-2.5 pr-10 sm:w-110 sm:p-3',
                    toastClasses.border[type],
                    className,
                    {
                        'animate-leave': !t.visible,
                        'animate-enter': t.visible
                    }
                )}
            >
                {icon[type]}

                <div className="flex w-full flex-col gap-1">
                    <Text size="large" className={toastClasses.text[type]}>
                        {title}
                    </Text>

                    {text && <Text>{text}</Text>}
                </div>

                <button
                    type="button"
                    onClick={() => toast.dismiss(t.id)}
                    className="absolute top-1.5 right-1.5 cursor-pointer outline-hidden transition-opacity duration-300 hover:opacity-65"
                >
                    <X className="size-5" />
                </button>
            </div>
        );
    }
);

Toast.displayName = 'Toast';
