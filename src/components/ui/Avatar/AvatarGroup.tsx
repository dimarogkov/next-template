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
    visibleCount?: number;
    className?: string;
}

const AvatarGroup: FC<Props> = forwardRef<HTMLDivElement, Props>(({ visibleCount, className = '', ...props }, ref) => {
    const childArray = Children.toArray(props.children) as ReactElement[];
    const childType = childArray[0].props.type || EnumAvatar.circle;
    const childSize = childArray[0].props.size || 48;

    const groupStyle = {
        width: `${childSize}px`,
        height: `${childSize}px`,
        ...(visibleCount && {
            left: `${visibleCount * Math.round(childSize / 4) * -1}px`,
            outline: `${Math.round(childSize / 30)}px solid white`,
        }),
    };

    return (
        <div ref={ref} {...props} className={`relative flex items-center ${className}`}>
            {childArray.slice(0, visibleCount).map((child, index) => {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, { currentIndex: index });
                }

                return child;
            })}

            {visibleCount && childArray.length > visibleCount && (
                <div
                    className={cn('relative flex items-center justify-center text-base bg-gray', {
                        'rounded-full': childType === EnumAvatar.circle,
                        'rounded-md': childType === EnumAvatar.square,
                    })}
                    style={groupStyle}
                >
                    +{childArray.length - visibleCount}
                </div>
            )}
        </div>
    );
});

AvatarGroup.displayName = 'AvatarGroup';
export default AvatarGroup;
