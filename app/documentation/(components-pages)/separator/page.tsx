import { Metadata } from 'next';
import { SEPARATOR_CODE, SEPARATOR_DEMO_CODE, SEPARATOR_USAGE_CODE } from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import SeparatorDemo from './SeparatorDemo';

export const metadata: Metadata = {
    title: 'Separator',
};

export default function SeparatorPage() {
    const preview: IDocumentationPreview = {
        demo: <SeparatorDemo />,
        code: SEPARATOR_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Separator',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Separator</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SEPARATOR_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [SEPARATOR_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Separator',
        description: 'Visually or semantically separates content.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
