import { Metadata } from 'next';
import { LOADER_CODE, LOADER_DEMO_CODE, LOADER_USAGE_CODE } from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import LoaderDemo from './LoaderDemo';

export const metadata: Metadata = {
    title: 'Loader',
};

export default function LoaderPage() {
    const preview: IDocumentationPreview = {
        demo: <LoaderDemo />,
        code: LOADER_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Loader',
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
}
