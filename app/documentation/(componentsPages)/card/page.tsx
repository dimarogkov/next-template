import { Metadata } from 'next';
import {
    CARD_CODE,
    CARD_WRAPPER_CODE,
    CARD_HEAD_CODE,
    CARD_BODY_CODE,
    CARD_FOOTER_CODE,
    CARD_DEMO_CODE,
    CARD_USAGE_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { CardDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Card',
};

const CardPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Card',
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
        preview: {
            demo: <CardDemo />,
            code: CARD_DEMO_CODE,
        },
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default CardPage;
