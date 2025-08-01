import { Metadata } from 'next';
import { LOADER_CODE, LOADER_USAGE_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { LoaderPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Loader',
};

const LoaderPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Loader.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Loader</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [LOADER_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [LOADER_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Loader',
        description: 'A reusable component for indicating loading or processing states.',
        preview: <LoaderPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default LoaderPage;
