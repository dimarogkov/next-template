import { useEffect, useState } from 'react';
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
}
