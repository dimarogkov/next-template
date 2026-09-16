import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Text } from '@components/atoms';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    value: number;
    radius?: number;
    type?: 'line' | 'circle';
    className?: string;
}

export const Progress = forwardRef<HTMLDivElement, Props>(
    ({ value, radius = 60, type = 'line', className = '', ...props }, ref) => {
        const size = radius * 2;
        const normalizedRadius = radius - 3;
        const circumference = normalizedRadius * 2 * Math.PI;
        const strokeDashoffset = circumference - (value / 100) * circumference;

        return (
            <div
                ref={ref}
                {...props}
                className={cn('relative overflow-hidden rounded-md', className, {
                    'bg-border h-2 w-full': type === 'line'
                })}
            >
                {type === 'circle' ? (
                    <div className="relative" style={{ width: size }}>
                        <svg width={size} height={size}>
                            <circle
                                cx={radius}
                                cy={radius}
                                r={normalizedRadius}
                                fill="transparent"
                                strokeWidth={6}
                                className="stroke-border"
                            />
                            <circle
                                r={normalizedRadius}
                                cx={radius}
                                cy={radius}
                                strokeLinecap="round"
                                fill="transparent"
                                strokeWidth={6}
                                strokeDasharray={`${circumference} ${circumference}`}
                                strokeDashoffset={strokeDashoffset}
                                transform={`rotate(-90 ${radius} ${radius})`}
                                className="stroke-title transition-all duration-300"
                            />
                        </svg>

                        <Text
                            size="large"
                            className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
                        >
                            {value}%
                        </Text>
                    </div>
                ) : (
                    <span
                        className="bg-title absolute top-0 left-0 h-full rounded-md transition-all duration-300"
                        style={{ width: `${value}%` }}
                    />
                )}
            </div>
        );
    }
);

Progress.displayName = 'Progress';
