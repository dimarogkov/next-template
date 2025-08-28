import { Metadata } from 'next';
import { NPM_CLASSNAMES_CODE, TEXT_DEMO_CODE, TEXT_CODE, TEXT_USAGE_CODE } from '@/src/variables/code';
import {
    IDocumentationData,
    IDocumentationCodeSection,
    IDocumentationPreview,
} from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { TextDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Text',
};

const TextPage = () => {
    const preview: IDocumentationPreview = {
        demo: <TextDemo />,
        code: TEXT_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [NPM_CLASSNAMES_CODE],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Text.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Text</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [TEXT_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [TEXT_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Text',
        description: 'Styles for text.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default TextPage;
