export const CAROUSEL_CODE = `import CarouselViewport from './CarouselViewport';
import CarouselWrapper from './CarouselWrapper';
import CarouselContainer from './CarouselContainer';
import CarouselPrevious from './CarouselPrevious';
import CarouselItem from './CarouselItem';
import CarouselNext from './CarouselNext';
import CarouselDot from './CarouselDot';

export const Carousel = Object.assign(CarouselWrapper, {
    Viewport: CarouselViewport,
    Container: CarouselContainer,
    Previous: CarouselPrevious,
    Item: CarouselItem,
    Next: CarouselNext,
    Dot: CarouselDot,
});`;

export const CAROUSEL_WRAPPER_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CarouselWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});

CarouselWrapper.displayName = 'CarouselWrapper';
export default CarouselWrapper;`;

export const CAROUSEL_VIEWPORT_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CarouselViewport = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={\`relative w-full overflow-hidden \${className}\`} />;
});

CarouselViewport.displayName = 'CarouselViewport';
export default CarouselViewport;`;

export const CAROUSEL_CONTAINER_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CarouselContainer = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={\`flex touch-pan-y \${className}\`} />;
});

CarouselContainer.displayName = 'CarouselContainer';
export default CarouselContainer;`;

export const CAROUSEL_PREVIOUS_CODE = `'use client';
import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import { ChevronLeft } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    className?: string;
}

const CarouselPrevious = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            type='button'
            className={cn(
                \`relative flex items-center justify-center size-9 min-w-9 text-title outline-none rounded-md border border-border transition-colors duration-300 hover:bg-border \${className}\`,
                {
                    'opacity-60 pointer-events-none select-none': props.disabled,
                }
            )}
        >
            <ChevronLeft className='size-5' />
        </button>
    );
});

CarouselPrevious.displayName = 'CarouselPrevious';
export default CarouselPrevious;`;

export const CAROUSEL_ITEM_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CarouselItem = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={\`relative flex-none basis-full min-w-0 \${className}\`} />;
});

CarouselItem.displayName = 'CarouselItem';
export default CarouselItem;`;

export const CAROUSEL_NEXT_CODE = `'use client';
import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    className?: string;
}

const CarouselNext = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            type='button'
            className={cn(
                \`relative flex items-center justify-center size-9 min-w-9 text-title outline-none rounded-md border border-border transition-colors duration-300 hover:bg-border \${className}\`,
                {
                    'opacity-60 pointer-events-none select-none': props.disabled,
                }
            )}
        >
            <ChevronRight className='size-5' />
        </button>
    );
});

CarouselNext.displayName = 'CarouselNext';
export default CarouselNext;`;

export const CAROUSEL_DOT_CODE = `import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
	isActive: boolean;
	className?: string;
}

const CarouselDot = forwardRef<HTMLButtonElement, Props>(({ isActive, className = '', ...props }, ref) => {
	return (
		<button
			ref={ref}
			{...props}
			type='button'
			className={cn(
				\`relative size-4 md:size-5 outline-none rounded-full border-2 transition-colors duration-300 \${className}\`,
				{
					'border-title pointer-events-none': isActive,
					'border-border': !isActive,
				}
			)}
		/>
	);
});

CarouselDot.displayName = 'CarouselDot';
export default CarouselDot;`;

export const CAROUSEL_HOOK_CODE = `import { useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

export default function useCarousel(api?: EmblaCarouselType) {
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(true);
	const [activeDotIndex, setActiveDotIndex] = useState(0);
	const [dots, setDots] = useState<number[]>([]);

	useEffect(() => {
		if (!api) {
			return;
		}

		const handleInit = () => setDots(api.scrollSnapList());

		const handleSelect = () => {
			setIsPrevDisabled(!api.canScrollPrev());
			setIsNextDisabled(!api.canScrollNext());
			setActiveDotIndex(api.selectedScrollSnap());
		};

		handleInit();
		handleSelect();

		api.on('reInit', handleInit);
		api.on('reInit', handleSelect);
		api.on('select', handleSelect);

		return () => {
			api.off('reInit', handleInit);
			api.off('reInit', handleSelect);
			api.off('select', handleSelect);
		};
	}, [api]);

	const onPrevClick = () => api?.scrollPrev();
	const onNextClick = () => api?.scrollNext();
	const onDotClick = (index: number) => api?.scrollTo(index);

	return {
		dots,
		activeDotIndex,
		isPrevDisabled,
		isNextDisabled,
		onPrevClick,
		onNextClick,
		onDotClick,
	};
}`;
