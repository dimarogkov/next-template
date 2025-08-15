import { Metadata } from 'next';
import { INPUT_USAGE_CODE, LABEL_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { InputPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Label',
};

const LabelPage = () => {
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
            codeArr: [INPUT_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Label',
        description: 'A reusable component for wrapping Form elements.',
        preview: <InputPreview />,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default LabelPage;
