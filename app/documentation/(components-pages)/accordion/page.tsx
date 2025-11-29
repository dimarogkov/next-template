import { Metadata } from 'next';
import {
    ACCORDION_CODE,
    ACCORDION_WRAPPER_CODE,
    ACCORDION_ITEM_CODE,
    ACCORDION_TITLE_CODE,
    ACCORDION_CONTENT_CODE,
    ACCORDION_DEMO_CODE,
    ACCORDION_USAGE_CODE,
    ACCORDION_ACTIVE_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
    NPM_LUCIDE_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import AccordionDemo from './AccordionDemo';

export const metadata: Metadata = {
    title: 'Accordion',
};

export default function AccordionPage() {
    const preview: IDocumentationPreview = {
        demo: <AccordionDemo />,
        code: ACCORDION_DEMO_CODE,
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
                { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Accordion',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Accordion</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: ACCORDION_CODE },
                { label: 'AccordionWrapper.tsx', code: ACCORDION_WRAPPER_CODE },
                { label: 'AccordionItem.tsx', code: ACCORDION_ITEM_CODE },
                { label: 'AccordionTitle.tsx', code: ACCORDION_TITLE_CODE },
                { label: 'AccordionContent.tsx', code: ACCORDION_CONTENT_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [ACCORDION_USAGE_CODE],
        },
        {
            id: 'active',
            title: 'Active',
            link: '',
            description: (
                <Text>
                    To make an <span className='badge-item'>Accordion</span> initially open, add the&nbsp;
                    <span className='badge-item'>defaultActiveIndex</span> prop to it.
                </Text>
            ),
            withAccordion: false,
            codeArr: [ACCORDION_ACTIVE_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Accordion',
        description:
            'A vertically stacked set of interactive headings that each reveal a section of content using Framer Motion.',
        links: [{ href: 'https://motion.dev/docs/react', name: 'Docs' }],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
