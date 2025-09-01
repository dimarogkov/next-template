import { Metadata } from 'next';
import { LOADER_DEMO_CODE, LOADER_CODE, LOADER_USAGE_CODE } from '@/src/variables/code';
import {
    IDocumentationData,
    IDocumentationCodeSection,
    IDocumentationPreview,
} from '@/src/types/interfaces/Documentation';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { LoaderDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Loader',
};

const LoaderPage = () => {
    const preview: IDocumentationPreview = {
        demo: <LoaderDemo />,
        code: LOADER_DEMO_CODE,
    };

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
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default LoaderPage;
