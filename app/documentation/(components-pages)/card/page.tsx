import { Metadata } from 'next';
import {
    CARD_CODE,
    CARD_WRAPPER_CODE,
    CARD_HEAD_CODE,
    CARD_BODY_CODE,
    CARD_FOOTER_CODE,
    CARD_DEMO_CODE,
    CARD_USAGE_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import CardDemo from './CardDemo';

export const metadata: Metadata = {
    title: 'Card',
};

export default function CardPage() {
    const preview: IDocumentationPreview = {
        demo: <CardDemo />,
        code: CARD_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Card',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Card</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: CARD_CODE },
                { label: 'CardWrapper.tsx', code: CARD_WRAPPER_CODE },
                { label: 'CardHead.tsx', code: CARD_HEAD_CODE },
                { label: 'CardBody.tsx', code: CARD_BODY_CODE },
                { label: 'CardFooter.tsx', code: CARD_FOOTER_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [CARD_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Card',
        description: 'Displays a card with header, body and footer.',
        links: [],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
