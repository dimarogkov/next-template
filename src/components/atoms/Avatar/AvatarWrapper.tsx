'use client';
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
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    currentIndex?: number;
    type?: 'circle' | 'square';
    isOnline?: boolean;
    className?: string;
}

const AvatarWrapper = forwardRef<HTMLDivElement, Props>(
    ({ currentIndex, type = 'circle', isOnline = false, className = '', ...props }, ref) => {
        const [currentWidth, setCurrentWidth] = useState(0);
        const avatarRef = useRef<HTMLDivElement>(null);

        const isTypeCircle = type === 'circle';
        const isTypeSquare = type === 'square';

        useEffect(() => {
            setCurrentWidth(avatarRef.current?.offsetWidth || 48);
        }, []);

        const avatarStyle = {
            ...(currentIndex && {
                left: `${currentIndex * Math.round(currentWidth / 4) * -1}px`,
                outline: '3px solid var(--fallback-b1)',
            }),
        };

        return (
            <div
                ref={ref || avatarRef}
                {...props}
                className={cn(`relative skeleton ${className || 'size-12'}`, {
                    'rounded-full': isTypeCircle,
                    'rounded-md': isTypeSquare,
                    'online-square': isOnline && isTypeSquare,
                    online: isOnline && isTypeCircle,
                })}
                style={avatarStyle}
            >
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, { type });
                    }

                    return child;
                })}
            </div>
        );
    }
);

AvatarWrapper.displayName = 'AvatarWrapper';
export default AvatarWrapper;
