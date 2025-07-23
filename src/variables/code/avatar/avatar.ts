export const AVATAR_CODE = `import { AvatarGroup } from './AvatarGroup';
import { AvatarWrapper } from './AvatarWrapper';
import { AvatarLink } from './AvatarLink';
import { AvatarImg } from './AvatarImg';

export const Avatar = Object.assign(AvatarWrapper, {
	Link: AvatarLink,
	Img: AvatarImg,
});

export { AvatarGroup };`;

export const AVATAR_WRAPPER_CODE = `import {
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
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	currentIndex?: number;
	type?: 'circle' | 'square';
	isOnline?: boolean;
	className?: string;
}

export const AvatarWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
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
				left: \`\${currentIndex * Math.round(currentWidth / 4) * -1}px\`,
				outline: \`3px solid #0a0a0a\`,
			}),
		};

		return (
			<div
				ref={ref || avatarRef}
				{...props}
				className={cn(\`relative skeleton \${className || 'size-12'}\`, {
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
);`;

export const AVATAR_LINK_CODE = `import {
	AnchorHTMLAttributes,
	Children,
	cloneElement,
	FC,
	forwardRef,
	isValidElement,
	ReactElement,
	ReactNode,
	RefAttributes,
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
	href: string;
	type?: 'circle' | 'square';
	className?: string;
	children?: ReactNode;
}

export const AvatarLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
	({ href, type = 'circle', children, className = '', ...props }, ref) => {
		const isTypeCircle = type === 'circle';
		const isTypeSquare = type === 'square';

		return (
			<Link
				ref={ref}
				{...props}
				to={href}
				className={cn(\`relative block w-full h-full overflow-hidden \${className}\`, {
					'rounded-full': isTypeCircle,
					'rounded-md': isTypeSquare,
				})}
			>
				{Children.map(children, (child) => {
					if (isValidElement(child)) {
						return cloneElement(child as ReactElement, { type });
					}

					return child;
				})}
			</Link>
		);
	}
);`;

export const AVATAR_IMG_CODE = `import { FC, forwardRef, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'img'>, RefAttributes<HTMLImageElement> {
    type?: 'circle' | 'square';
    hasHover?: boolean;
    className?: string;
}

export const AvatarImg: FC<Props> = forwardRef<HTMLImageElement, Props>(
    ({ type = 'circle', hasHover = false, className = '', ...props }, ref) => {
        const isTypeCircle = type === 'circle';
        const isTypeSquare = type === 'square';

        const animation: HTMLMotionProps<'img'> = {
            whileHover: { scale: 1.1, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
        };

        return (
            <motion.img
                ref={ref}
                {...props}
                {...(hasHover && animation)}
                alt={props.alt}
                className={cn(\`absolute top-0 left-0 object-cover object-center \${className}\`, {
                    'will-change-transform': hasHover,
                    'rounded-full': isTypeCircle,
                    'rounded-md': isTypeSquare,
                })}
            />
        );
    }
);`;

export const AVATAR_GROUP_CODE = `import {
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
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	visibleCount?: number;
	className?: string;
}

export const AvatarGroup: FC<Props> = forwardRef<HTMLDivElement, Props>(
	({ visibleCount, className = '', ...props }, ref) => {
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
				left: \`\${visibleCount * Math.round(currentWidth / 4) * -1}px\`,
				outline: \`3px solid #0a0a0a\`,
			}),
		};

		return (
			<div ref={ref || groupRef} {...props} className={\`relative flex items-center \${className}\`}>
				{childArray.slice(0, visibleCount).map((child, index) => {
					if (isValidElement(child)) {
						return cloneElement(child as ReactElement, { currentIndex: index });
					}

					return child;
				})}

				{visibleCount && childArray.length > visibleCount && (
					<div
						className={cn(
							\`relative flex items-center justify-center text-base text-bg bg-title select-none \${
								widthClasses || 'size-12'
							}\`,
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
	}
);`;
