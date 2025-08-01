import { Metadata } from 'next';
import { TEXTAREA_CODE, TEXTAREA_USAGE_CODE, TEXTAREA_CONTROLLING_USAGE_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { TextareaPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Textarea',
};

const TextareaPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Textarea.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Textarea</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [TEXTAREA_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [TEXTAREA_USAGE_CODE],
        },
        {
            id: 'controlling',
            title: 'Controlling',
            link: '',
            description: (
                <Text>
                    To control the Textarea, add <span className='badge-item'>value</span> and&nbsp;
                    <span className='badge-item'>onChange</span> props to manage its state manually.
                </Text>
            ),
            withAccordion: false,
            codeArr: [TEXTAREA_CONTROLLING_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Textarea',
        description: 'Displays a form textarea or a component that looks like a textarea.',
        preview: <TextareaPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default TextareaPage;
