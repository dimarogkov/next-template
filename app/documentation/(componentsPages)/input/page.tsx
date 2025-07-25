import { Metadata } from 'next';
import { INPUT_CODE, INPUT_USAGE_CODE, INPUT_CONTROLLING_USAGE_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { InputPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Input',
};

const InputPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Input.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Input</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [INPUT_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [INPUT_USAGE_CODE],
        },
        {
            id: 'controlling',
            title: 'Controlling',
            link: '',
            description: (
                <Text>
                    To control the Input, add <span className='badge-item'>value</span> and&nbsp;
                    <span className='badge-item'>onChange</span> props to manage its state manually.
                </Text>
            ),
            withAccordion: false,
            codeArr: [INPUT_CONTROLLING_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Input',
        description: 'Displays a form input field or a component that looks like an input field.',
        preview: <InputPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default InputPage;
