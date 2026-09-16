export const CAROUSEL_CODE = `import { CarouselWrapper } from './CarouselWrapper';
import { CarouselViewport } from './CarouselViewport';
import { CarouselContainer } from './CarouselContainer';
import { CarouselPrevious } from './CarouselPrevious';
import { CarouselItem } from './CarouselItem';
import { CarouselNext } from './CarouselNext';
import { CarouselDot } from './CarouselDot';

export const Carousel = Object.assign(CarouselWrapper, {
  Viewport: CarouselViewport,
  Container: CarouselContainer,
  Previous: CarouselPrevious,
  Item: CarouselItem,
  Next: CarouselNext,
  Dot: CarouselDot
});`;

export const CAROUSEL_WRAPPER_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const CarouselWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('relative w-full', className)} />;
});

CarouselWrapper.displayName = 'CarouselWrapper';`;

export const CAROUSEL_VIEWPORT_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const CarouselViewport = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('relative w-full overflow-hidden', className)} />;
});

CarouselViewport.displayName = 'CarouselViewport';`;

export const CAROUSEL_CONTAINER_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const CarouselContainer = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('flex touch-pan-y', className)} />;
});

CarouselContainer.displayName = 'CarouselContainer';`;

export const CAROUSEL_PREVIOUS_CODE = `'use client';
import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import { ChevronLeft } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
  className?: string;
}

export const CarouselPrevious = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      type="button"
      className={cn(
        'border-border text-title hover:bg-border relative flex size-9 min-w-9 cursor-pointer items-center justify-center rounded-md border outline-hidden transition-colors duration-300',
        className,
        {
          'pointer-events-none opacity-60 select-none': props.disabled
        }
      )}
    >
      <ChevronLeft className="size-5" />
    </button>
  );
});

CarouselPrevious.displayName = 'CarouselPrevious';`;

export const CAROUSEL_ITEM_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const CarouselItem = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('relative min-w-0 flex-none basis-full', className)} />;
});

CarouselItem.displayName = 'CarouselItem';`;

export const CAROUSEL_NEXT_CODE = `'use client';
import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
  className?: string;
}

export const CarouselNext = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      type="button"
      className={cn(
        'border-border text-title hover:bg-border relative flex size-9 min-w-9 cursor-pointer items-center justify-center rounded-md border outline-hidden transition-colors duration-300',
        className,
        {
          'pointer-events-none opacity-60 select-none': props.disabled
        }
      )}
    >
      <ChevronRight className="size-5" />
    </button>
  );
});

CarouselNext.displayName = 'CarouselNext';`;

export const CAROUSEL_DOT_CODE = `import { forwardRef, ButtonHTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
  isActive: boolean;
  className?: string;
}

export const CarouselDot = forwardRef<HTMLButtonElement, Props>(({ isActive, className = '', ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      type="button"
      className={cn(
        'relative size-4 cursor-pointer rounded-full border-2 outline-hidden transition-colors duration-300 md:size-5',
        className,
        {
          'border-title pointer-events-none': isActive,
          'border-border': !isActive
        }
      )}
    />
  );
});

CarouselDot.displayName = 'CarouselDot';`;

export const CAROUSEL_HOOK_CODE = `import { useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

export const useCarousel = (api?: EmblaCarouselType) => {
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
    onDotClick
  };
};`;
