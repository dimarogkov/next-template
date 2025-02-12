import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { EnumProgress, EnumText } from '@/src/types/enums';
import Text from './Text';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    value: number;
    radius?: number;
    type?: EnumProgress;
    className?: string;
}

const Progress: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ value, radius = 60, type = EnumProgress.line, className = '', ...props }, ref) => {
        const size = radius * 2;
        const normalizedRadius = radius - 3;
        const circumference = normalizedRadius * 2 * Math.PI;
        const strokeDashoffset = circumference - (value / 100) * circumference;

        return (
            <div
                ref={ref}
                {...props}
                className={cn(`relative rounded overflow-hidden ${className}`, {
                    'w-full h-2 bg-gray': type === EnumProgress.line,
                })}
            >
                {type === EnumProgress.circle ? (
                    <div className='relative' style={{ width: size }}>
                        <svg width={size} height={size}>
                            <circle
                                cx={radius}
                                cy={radius}
                                r={normalizedRadius}
                                fill='transparent'
                                strokeWidth={6}
                                className='stroke-gray'
                            />
                            <circle
                                r={normalizedRadius}
                                cx={radius}
                                cy={radius}
                                strokeLinecap='round'
                                fill='transparent'
                                strokeWidth={6}
                                strokeDasharray={`${circumference} ${circumference}`}
                                strokeDashoffset={strokeDashoffset}
                                transform={`rotate(-90 ${radius} ${radius})`}
                                className='stroke-blue transition-all duration-300'
                            />
                        </svg>

                        <Text
                            textType={EnumText.large}
                            className='absolute top-0 left-0 flex items-center justify-center w-full h-full'
                        >
                            {value}%
                        </Text>
                    </div>
                ) : (
                    <span
                        className='absolute top-0 left-0 h-full rounded bg-blue transition-all duration-300'
                        style={{ width: `${value}%` }}
                    />
                )}
            </div>
        );
    }
);

Progress.displayName = 'Progress';
export default Progress;
