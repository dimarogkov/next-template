import { Metadata } from 'next';
import { INPUT_DEMO_CODE, LABEL_CODE, LABEL_USAGE_CODE } from '@/src/variables/code';
import {
    IDocumentationData,
    IDocumentationCodeSection,
    IDocumentationPreview,
} from '@/src/types/interfaces/Documentation';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { InputDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Label',
};

const LabelPage = () => {
    const preview: IDocumentationPreview = {
        demo: <InputDemo />,
        code: INPUT_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Label.tsx',
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
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default LabelPage;
