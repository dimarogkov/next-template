import { Metadata } from 'next';
import { TITLE_CODE, TITLE_USAGE_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { TitlePreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Title',
};

const TitlePage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Title.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Title</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [TITLE_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [TITLE_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Title',
        description: 'Styles for headings.',
        preview: <TitlePreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default TitlePage;
