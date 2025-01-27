'use client';
import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';
import { EnumAvatar } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    visibleCount?: number;
    className?: string;
}

const AvatarGroup: FC<Props> = forwardRef<HTMLDivElement, Props>(({ visibleCount, className = '', ...props }, ref) => {
    const [currentWidth, setCurrentWidth] = useState(0);
    const groupRef = useRef<HTMLDivElement>(null);

    const childArray = Children.toArray(props.children) as ReactElement[];
    const childType = childArray[0].props.type || EnumAvatar.circle;
    const widthClasses = childArray[0].props.className;

    useEffect(() => {
        setCurrentWidth(groupRef.current?.offsetHeight || 48);
    }, []);

    const groupStyle = {
        ...(visibleCount && {
            left: `${visibleCount * Math.round(currentWidth / 4) * -1}px`,
            outline: `${Math.round(currentWidth / 30)}px solid white`,
        }),
    };

    return (
        <div ref={ref || groupRef} {...props} className={`relative flex items-center ${className}`}>
            {childArray.slice(0, visibleCount).map((child, index) => {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, { currentIndex: index });
                }

                return child;
            })}

            {visibleCount && childArray.length > visibleCount && (
                <div
                    className={cn(
                        `relative flex items-center justify-center text-base bg-gray ${widthClasses || 'size-12'}`,
                        {
                            'rounded-full': childType === EnumAvatar.circle,
                            'rounded-md': childType === EnumAvatar.square,
                        }
                    )}
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
