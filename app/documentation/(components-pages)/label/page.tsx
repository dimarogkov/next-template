import { Metadata } from 'next';
import { LABEL_CODE, LABEL_DEMO_CODE, LABEL_USAGE_CODE } from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import LabelDemo from './LabelDemo';

export const metadata: Metadata = {
    title: 'Label',
};

export default function LabelPage() {
    const preview: IDocumentationPreview = {
        demo: <LabelDemo />,
        code: LABEL_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Label',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Label</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [LABEL_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [LABEL_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Label',
        description: 'A reusable component for wrapping Form elements.',
        links: [],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
