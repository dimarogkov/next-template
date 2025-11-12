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
    visibleCount?: number;
    className?: string;
}

const AvatarGroup = forwardRef<HTMLDivElement, Props>(({ visibleCount, className = '', ...props }, ref) => {
    const [currentWidth, setCurrentWidth] = useState(0);
    const groupRef = useRef<HTMLDivElement>(null);

    const childArray = Children.toArray(props.children) as ReactElement[];
    const childType = childArray[0].props.type || 'circle';
    const widthClasses = childArray[0].props.className;

    useEffect(() => {
        setCurrentWidth(groupRef.current?.offsetHeight || 48);
    }, []);

    const groupStyle = {
        ...(visibleCount && {
            left: `${visibleCount * Math.round(currentWidth / 4) * -1}px`,
            outline: '3px solid var(--fallback-b1)',
        }),
    };

    return (
        <div ref={ref || groupRef} {...props} className={`relative flex items-center ${className}`}>
            {childArray.slice(0, visibleCount).map((child, index) => {
                return isValidElement(child) ? cloneElement(child as ReactElement, { currentIndex: index }) : child;
            })}

            {visibleCount && childArray.length > visibleCount && (
                <div
                    className={cn(
                        `relative flex items-center justify-center font-medium text-base text-bg bg-title select-none ${
                            widthClasses || 'size-12'
                        }`,
                        {
                            'rounded-full': childType === 'circle',
                            'rounded-md': childType === 'square',
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
