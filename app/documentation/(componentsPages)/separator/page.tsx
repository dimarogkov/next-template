import { Metadata } from 'next';
import { SEPARATOR_DEMO_CODE, SEPARATOR_CODE, SEPARATOR_USAGE_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { SeparatorDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Separator',
};

const SeparatorPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Separator.tsx',
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
        preview: {
            demo: <SeparatorDemo />,
            code: SEPARATOR_DEMO_CODE,
        },
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default SeparatorPage;
