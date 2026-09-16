'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { useCarousel } from '@hooks';
import { Carousel, Text, Title } from '@components/atoms';

const ITEMS = Array.from({ length: 6 }).map((_, index) => index + 1);
const OPTIONS: EmblaOptionsType = { align: 'start' };

export const CarouselDemo = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
    const { dots, activeDotIndex, isPrevDisabled, isNextDisabled, onPrevClick, onNextClick, onDotClick } =
        useCarousel(emblaApi);

    return (
        <Carousel>
            <Carousel.Viewport ref={emblaRef} className="mb-2.5 last:mb-0">
                <Carousel.Container className="-ml-4">
                    {ITEMS.map((item) => (
                        <Carousel.Item key={item} className="pl-4 md:basis-1/2">
                            <div className="border-border rounded-md border p-4">
                                <Title size="h3" className="mb-2 last:mb-0">
                                    Slide {item}
                                </Title>

                                <Text size="large">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga sequi expedita
                                    minima adipisci impedit eius porro beatae tenetur possimus laudantium maxime
                                    quisquam quibusdam eligendi dolores, iusto eum officiis dignissimos?
                                </Text>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Container>
            </Carousel.Viewport>

            <div className="flex w-full items-center justify-between">
                <div className="flex gap-2">
                    <Carousel.Previous disabled={isPrevDisabled} onClick={onPrevClick} />
                    <Carousel.Next disabled={isNextDisabled} onClick={onNextClick} />
                </div>

                <div className="flex gap-2 md:gap-2.5">
                    {dots.map((_, index) => (
                        <Carousel.Dot
                            key={index}
                            isActive={index === activeDotIndex}
                            onClick={() => onDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </Carousel>
    );
};
