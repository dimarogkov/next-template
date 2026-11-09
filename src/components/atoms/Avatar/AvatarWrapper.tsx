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
    useState
} from 'react';
import { assignRefs } from '@utils';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    currentIndex?: number;
    type?: 'circle' | 'square';
    isOnline?: boolean;
    hasRing?: boolean;
    className?: string;
}

export const AvatarWrapper = forwardRef<HTMLDivElement, Props>(
    ({ currentIndex, type = 'circle', isOnline = false, hasRing = false, className = '', ...props }, ref) => {
        const [currentWidth, setCurrentWidth] = useState(0);
        const avatarRef = useRef<HTMLDivElement>(null);
        const setRefs = assignRefs<HTMLDivElement>(ref, avatarRef);

        const isTypeCircle = type === 'circle';

        useEffect(() => {
            setCurrentWidth(avatarRef.current?.offsetWidth || 48);
        }, []);

        const avatarStyle = {
            ...(currentIndex && {
                left: `${currentIndex * Math.round(currentWidth / 4) * -1}px`,
                boxShadow: '0 0 0 3px var(--color-bg)'
            })
        };

        return (
            <div
                ref={setRefs}
                {...props}
                style={avatarStyle}
                className={cn('relative', className || 'size-12', {
                    'outline-title outline-2 outline-offset-2': hasRing,
                    'rounded-full': isTypeCircle,
                    'rounded-md': !isTypeCircle,
                    'online-square': isOnline && !isTypeCircle,
                    online: isOnline && isTypeCircle
                })}
            >
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, { type })
                        : child;
                })}

                {isOnline && <span className="sr-only">Online</span>}
            </div>
        );
    }
);

AvatarWrapper.displayName = 'AvatarWrapper';
