'use client';
import toast, { type Toast as TostType } from 'react-hot-toast';
import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { EnumText, EnumToast } from '@/src/types/enums';
import { IToastData } from '@/src/types/interfaces/ToastData';

import Text from './Text';
import { CircleAlert, CircleCheck, CircleX, Info, X } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    toast: TostType;
    type?: EnumToast;
    data: IToastData;
    className?: string;
}

const Toast: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ toast: t, type = EnumToast.info, data, className = '', ...props }, ref) => {
        const { title, text } = data;

        const toastClasses = {
            border: {
                [EnumToast.info as string]: 'border-l-blue',
                [EnumToast.success as string]: 'border-l-green',
                [EnumToast.warning as string]: 'border-l-yellow',
                [EnumToast.error as string]: 'border-l-red',
            },
            text: {
                [EnumToast.info as string]: 'text-blue',
                [EnumToast.success as string]: 'text-green',
                [EnumToast.warning as string]: 'text-yellow',
                [EnumToast.error as string]: 'text-red',
            },
        };

        const icon = {
            [EnumToast.info as string]: <Info className='hidden sm:block size-9 min-w-9 text-blue stroke-1' />,
            [EnumToast.success as string]: (
                <CircleCheck className='hidden sm:block size-9 min-w-9 text-green stroke-1' />
            ),
            [EnumToast.warning as string]: (
                <CircleAlert className='hidden sm:block size-9 min-w-9 text-yellow stroke-1' />
            ),
            [EnumToast.error as string]: <CircleX className='hidden sm:block size-9 min-w-9 text-red stroke-1' />,
        };

        return (
            <div
                ref={ref}
                {...props}
                role='alert'
                className={cn(
                    `relative flex items-center gap-3 w-full sm:w-[440px] rounded p-2.5 sm:p-3 pr-10 border border-l-4 border-gray bg-white ${className}`,
                    toastClasses.border[type],
                    {
                        'animate-leave': !t.visible,
                        'animate-enter': t.visible,
                    }
                )}
            >
                {icon[type]}

                <div className='flex flex-col gap-1 w-full'>
                    <Text textType={EnumText.large} className={toastClasses.text[type]}>
                        {title}
                    </Text>

                    {text && <Text>{text}</Text>}
                </div>

                <button
                    type='button'
                    onClick={() => toast.dismiss(t.id)}
                    className='absolute top-1.5 right-1.5 outline-none transition-opacity duration-300 hover:opacity-65'
                >
                    <X className='size-6 stroke-1' />
                </button>
            </div>
        );
    }
);

Toast.displayName = 'Toast';
export default Toast;
