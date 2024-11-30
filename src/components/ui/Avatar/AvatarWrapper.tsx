import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
} from 'react';
import { EnumAvatar } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    currentIndex?: number;
    type?: EnumAvatar;
    size?: number;
    isOnline?: boolean;
    className?: string;
}

const AvatarWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ currentIndex, type = EnumAvatar.circle, size = 48, isOnline, className = '', ...props }, ref) => {
        const isTypeCircle = type === EnumAvatar.circle;
        const isTypeSquare = type === EnumAvatar.square;
        const isOfflineExist = isOnline === false;
        const isOnlineExist = isOnline === true;

        const avatarStyle = {
            width: `${size}px`,
            height: `${size}px`,
            ...(currentIndex && {
                left: `${currentIndex * Math.round(size / 4) * -1}px`,
                outline: `${Math.round(size / 30)}px solid white`,
            }),
        };

        return (
            <div
                ref={ref}
                {...props}
                className={cn(`relative skeleton ${className}`, {
                    'rounded-full': isTypeCircle,
                    'rounded-md': isTypeSquare,
                    'offline-square': isOfflineExist && isTypeSquare,
                    'online-square': isOnlineExist && isTypeSquare,
                    offline: isOfflineExist && isTypeCircle,
                    online: isOnlineExist && isTypeCircle,
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
