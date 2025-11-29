import { Metadata } from 'next';
import {
    CAROUSEL_CODE,
    CAROUSEL_WRAPPER_CODE,
    CAROUSEL_VIEWPORT_CODE,
    CAROUSEL_CONTAINER_CODE,
    CAROUSEL_PREVIOUS_CODE,
    CAROUSEL_ITEM_CODE,
    CAROUSEL_NEXT_CODE,
    CAROUSEL_DOT_CODE,
    CAROUSEL_HOOK_CODE,
    CAROUSEL_DEMO_CODE,
    CAROUSEL_USAGE_CODE,
    CAROUSEL_SIZES_USAGE_CODE,
    CAROUSEL_SPACING_USAGE_CODE,
    CAROUSEL_BTNS_USAGE_CODE,
    CAROUSEL_DOTS_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_EMBLA_CAROUSEL_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import CarouselDemo from './CarouselDemo';

export const metadata: Metadata = {
    title: 'Carousel',
};

export default function CarouselPage() {
    const preview: IDocumentationPreview = {
        demo: <CarouselDemo />,
        code: CAROUSEL_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                { label: 'Lucide', code: NPM_LUCIDE_CODE },
                { label: 'Embla Carousel', code: NPM_EMBLA_CAROUSEL_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Carousel',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>useCarousel</span> and&nbsp;
                    <span className='badge-item'>Carousel</span> component for consistent and maintainable usage
                    throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: CAROUSEL_CODE },
                { label: 'usePagination.tsx', code: CAROUSEL_HOOK_CODE },
                { label: 'CarouselWrapper.tsx', code: CAROUSEL_WRAPPER_CODE },
                { label: 'CarouselViewport.tsx', code: CAROUSEL_VIEWPORT_CODE },
                { label: 'CarouselContainer.tsx', code: CAROUSEL_CONTAINER_CODE },
                { label: 'CarouselPrevious.tsx', code: CAROUSEL_PREVIOUS_CODE },
                { label: 'CarouselItem.tsx', code: CAROUSEL_ITEM_CODE },
                { label: 'CarouselNext.tsx', code: CAROUSEL_NEXT_CODE },
                { label: 'CarouselDot.tsx', code: CAROUSEL_DOT_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [CAROUSEL_USAGE_CODE],
        },
        {
            id: 'sizes',
            title: 'Sizes',
            link: '',
            description: (
                <Text>
                    To set the size of the items, you can use the <span className='badge-item'>basis</span> utility
                    class on the <span className='badge-item'>Carousel.Item</span>.
                </Text>
            ),
            withAccordion: false,
            codeArr: [CAROUSEL_SIZES_USAGE_CODE],
        },
        {
            id: 'spacing',
            title: 'Spacing',
            link: '',
            description: (
                <Text>
                    To set the spacing between the items, we use a <span className='badge-item'>pl-[VALUE]</span>&nbsp;
                    utility on the <span className='badge-item'>Carousel.Item</span> and a negative&nbsp;
                    <span className='badge-item'>-ml-[VALUE]</span> on the&nbsp;
                    <span className='badge-item'>Carousel.Container</span>.
                </Text>
            ),
            withAccordion: false,
            codeArr: [CAROUSEL_SPACING_USAGE_CODE],
        },
        {
            id: 'buttons',
            title: 'Buttons',
            link: '',
            description: (
                <Text>
                    This example shows how to add <span className='badge-item'>Carousel.Previous</span> and&nbsp;
                    <span className='badge-item'>Carousel.Next</span> for moving between carousel slides.
                </Text>
            ),
            withAccordion: false,
            codeArr: [CAROUSEL_BTNS_USAGE_CODE],
        },
        {
            id: 'dots',
            title: 'Dots',
            link: '',
            description: (
                <Text>
                    This example shows how to add <span className='badge-item'>Carousel.Dot</span> for moving carousel
                    slides.
                </Text>
            ),
            withAccordion: false,
            codeArr: [CAROUSEL_DOTS_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Carousel',
        description: 'A carousel with motion and swipe built using Embla.',
        links: [
            { href: 'https://www.embla-carousel.com/get-started/react/', name: 'Docs' },
            { href: 'https://www.embla-carousel.com/api/', name: 'API Reference' },
        ],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
