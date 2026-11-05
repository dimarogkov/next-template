export const CAROUSEL_DEMO_CODE = `'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { useCarousel } from '@hooks';
import { Carousel, Text, Title } from '@components/atoms';

const ITEMS = [
  {
    id: 1,
    text: 'A quiet morning in the mountains, mist rolling over the pine trees. The air is cold enough to see your breath, and the only sound is a stream somewhere below the ridge.'
  },
  {
    id: 2,
    text: 'City lights reflecting off wet streets after a late summer rain. Cafes are still open, and the sidewalks are nearly empty except for a few people heading home.'
  },
  {
    id: 3,
    text: 'Fresh coffee and an open notebook on a slow Sunday afternoon. No plans for the rest of the day, just a window seat and whatever comes to mind.'
  },
  {
    id: 4,
    text: 'Waves rolling onto the shore as the sun begins to set. A few boats are still out past the breakwater, heading back in before the light fades completely.'
  },
  {
    id: 5,
    text: 'A quiet library corner stacked with old paperback novels. The spines are faded and the pages smell like dust, but every shelf still has something worth finding.'
  },
  {
    id: 6,
    text: 'Autumn leaves scattered across an empty park bench. A light wind keeps moving them across the path, and the trees above are almost bare.'
  }
];

const OPTIONS: EmblaOptionsType = { align: 'start' };

export const CarouselDemo = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const { dots, activeDotIndex, isPrevDisabled, isNextDisabled, onPrevClick, onNextClick, onDotClick, onKeyDown } =
    useCarousel(emblaApi);

  return (
    <Carousel aria-label="Slides" onKeyDown={onKeyDown}>
      <Carousel.Viewport ref={emblaRef} className="mb-2.5 last:mb-0">
        <Carousel.Container className="-ml-4">
          {ITEMS.map(({ id, text }) => (
            <Carousel.Item key={id} className="pl-4 md:basis-1/2">
              <div className="border-border h-full rounded-md border p-4">
                <Title size="h3" className="mb-2 last:mb-0">
                  Slide {id}
                </Title>

                <Text size="large">{text}</Text>
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
              aria-label={\`Go to slide \${index + 1}\`}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );
};`;
