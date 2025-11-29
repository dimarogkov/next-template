'use client';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { EmblaOptionsType } from 'embla-carousel';
import { DEV_ICONS } from '@constants';
import { DevIcon } from '@components/molecules';
import { Carousel } from '@components/atoms';

const OPTIONS: EmblaOptionsType = { loop: true, align: 'start' };
const AUTO_SCROLL_OPTIONS = {
    speed: 0.8,
    playOnInit: true,
    startDelay: 700,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
};

type Props = {
    className?: string;
};

export default function HomeSlider({ className = '' }: Props) {
    const [emblaRef] = useEmblaCarousel(OPTIONS, [AutoScroll(AUTO_SCROLL_OPTIONS)]);

    return (
        <Carousel className={className}>
            <Carousel.Viewport ref={emblaRef}>
                <Carousel.Container className='-ml-2 min-h-9'>
                    {[...DEV_ICONS, ...DEV_ICONS].map((icon, text) => (
                        <Carousel.Item key={text} className='pl-2 !basis-auto'>
                            <DevIcon devIcon={icon} />
                        </Carousel.Item>
                    ))}
                </Carousel.Container>
            </Carousel.Viewport>
        </Carousel>
    );
}
