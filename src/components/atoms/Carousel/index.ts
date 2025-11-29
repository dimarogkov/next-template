import CarouselViewport from './CarouselViewport';
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
});
