export const CAROUSEL_USAGE_CODE = `import { Carousel } from '@components/atoms';

<Carousel>
	<Carousel.Viewport>
		<Carousel.Container>
			<Carousel.Item>Slide 1</Carousel.Item>
			<Carousel.Item>Slide 2</Carousel.Item>
			<Carousel.Item>Slide 3</Carousel.Item>
		</Carousel.Container>
	</Carousel.Viewport>
</Carousel>`;

export const CAROUSEL_SIZES_USAGE_CODE = `'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { Carousel } from '@components/atoms';

const ITEMS = Array.from({ length: 6 }).map((_, index) => index + 1);
const OPTIONS: EmblaOptionsType = { align: 'start' };

export default function CarouselDemo() {
	const [emblaRef] = useEmblaCarousel(OPTIONS);

	return (
		<Carousel>
			<Carousel.Viewport ref={emblaRef}>
				<Carousel.Container>
					{ITEMS.map((item) => (
						<Carousel.Item key={item} className='md:basis-1/2 lg:basis-1/3'>
							Slide {item}
						</Carousel.Item>
					))}
				</Carousel.Container>
			</Carousel.Viewport>
		</Carousel>
	);
}`;

export const CAROUSEL_SPACING_USAGE_CODE = `'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { Carousel } from '@components/atoms';

const ITEMS = Array.from({ length: 6 }).map((_, index) => index + 1);
const OPTIONS: EmblaOptionsType = { align: 'start' };

export default function CarouselDemo() {
	const [emblaRef] = useEmblaCarousel(OPTIONS);

	return (
		<Carousel>
			<Carousel.Viewport ref={emblaRef}>
				<Carousel.Container className='-ml-4'>
					{ITEMS.map((item) => (
						<Carousel.Item key={item} className='pl-4'>
							Slide {item}
						</Carousel.Item>
					))}
				</Carousel.Container>
			</Carousel.Viewport>
		</Carousel>
	);
}`;

export const CAROUSEL_BTNS_USAGE_CODE = `'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { useCarousel } from '@hooks';
import { Carousel } from '@components/atoms';

const ITEMS = Array.from({ length: 6 }).map((_, index) => index + 1);
const OPTIONS: EmblaOptionsType = { align: 'start' };

export default function CarouselDemo() {
	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
	const { isPrevDisabled, isNextDisabled, onPrevClick, onNextClick } = useCarousel(emblaApi);

	return (
		<Carousel>
			<Carousel.Viewport ref={emblaRef}>
				<Carousel.Container>
					{ITEMS.map((item) => (
						<Carousel.Item key={item}>Slide {item}</Carousel.Item>
					))}
				</Carousel.Container>
			</Carousel.Viewport>

			<div className='flex items-center justify-between w-full'>
				<div className='flex gap-2'>
					<Carousel.Previous disabled={isPrevDisabled} onClick={onPrevClick} />
					<Carousel.Next disabled={isNextDisabled} onClick={onNextClick} />
				</div>
			</div>
		</Carousel>
	);
}`;

export const CAROUSEL_DOTS_USAGE_CODE = `'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { useCarousel } from '@hooks';
import { Carousel } from '@components/atoms';

const ITEMS = Array.from({ length: 6 }).map((_, index) => index + 1);
const OPTIONS: EmblaOptionsType = { align: 'start' };

export default function CarouselDemo() {
	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
	const { dots, activeDotIndex, onDotClick } = useCarousel(emblaApi);

	return (
		<Carousel>
			<Carousel.Viewport ref={emblaRef}>
				<Carousel.Container>
					{ITEMS.map((item) => (
						<Carousel.Item key={item}>Slide {item}</Carousel.Item>
					))}
				</Carousel.Container>
			</Carousel.Viewport>

			<div className='flex items-center justify-between w-full'>
				<div className='flex gap-2 md:gap-2.5'>
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
}`;
