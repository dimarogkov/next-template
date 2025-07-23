export const TOAST_TYPE_CODE = `export interface IToastData {
    title: string;
    text: string;
}`;

export const TOAST_CODE = `import toast, { type Toast as TostType } from 'react-hot-toast';
import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { IToastData } from '../../types/interfaces/ToastData';
import { Text } from './Text';
import { CircleAlert, CircleCheck, CircleX, Info, X } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    toast: TostType;
    type?: 'info' | 'success' | 'warning' | 'error';
    data: IToastData;
    className?: string;
}

export const Toast: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ toast: t, type = 'info', data, className = '', ...props }, ref) => {
        const { title, text } = data;

        const toastClasses = {
            border: {
                info: 'border-l-title',
                success: 'border-l-green',
                warning: 'border-l-yellow',
                error: 'border-l-red',
            },
            text: {
                info: 'text-title',
                success: 'text-green',
                warning: 'text-yellow',
                error: 'text-red',
            },
        };

        const icon = {
            info: <Info className='hidden sm:block size-9 min-w-9 text-title stroke-1' />,
            success: <CircleCheck className='hidden sm:block size-9 min-w-9 text-green stroke-1' />,
            warning: <CircleAlert className='hidden sm:block size-9 min-w-9 text-yellow stroke-1' />,
            error: <CircleX className='hidden sm:block size-9 min-w-9 text-red stroke-1' />,
        };

        return (
            <div
                ref={ref}
                {...props}
                className={cn(
                    \`relative flex items-center gap-3 w-full sm:w-[440px] rounded-md p-2.5 sm:p-3 pr-10 border border-l-4 border-border bg-bg \${className}\`,
                    toastClasses.border[type],
                    {
                        'animate-leave': !t.visible,
                        'animate-enter': t.visible,
                    }
                )}
            >
                {icon[type]}

                <div className='flex flex-col gap-1 w-full'>
                    <Text size='large' className={toastClasses.text[type]}>
                        {title}
                    </Text>

                    {text && <Text>{text}</Text>}
                </div>

                <button
                    type='button'
                    onClick={() => toast.dismiss(t.id)}
                    className='absolute top-1.5 right-1.5 outline-none transition-opacity duration-300 hover:opacity-65'
                >
                    <X className='size-5' />
                </button>
            </div>
        );
    }
);`;
