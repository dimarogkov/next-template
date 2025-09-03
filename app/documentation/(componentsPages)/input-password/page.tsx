import { Metadata } from 'next';
import {
    INPUT_PASSWORD_CODE,
    INPUT_PASSWORD_DEMO_CODE,
    INPUT_PASSWORD_USAGE_CODE,
    INPUT_PASSWORD_CONTROLLED_USAGE_CODE,
    NPM_LUCIDE_CODE,
} from '@/src/variables/code';
import {
    IDocumentationData,
    IDocumentationCodeSection,
    IDocumentationPreview,
} from '@/src/types/interfaces/Documentation';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { InputPasswordDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Input Password',
};

const InputPasswordPage = () => {
    const preview: IDocumentationPreview = {
        demo: <InputPasswordDemo />,
        code: INPUT_PASSWORD_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [NPM_LUCIDE_CODE],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/InputPassword.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>InputPassword</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [INPUT_PASSWORD_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [INPUT_PASSWORD_USAGE_CODE],
        },
        {
            id: 'controlled',
            title: 'Controlled',
            link: '',
            description: (
                <Text>
                    To control the Input, add <span className='badge-item'>value</span> and&nbsp;
                    <span className='badge-item'>onChange</span> props to manage its state manually.
                </Text>
            ),
            withAccordion: false,
            codeArr: [INPUT_PASSWORD_CONTROLLED_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Input Password',
        description: 'Displays a form input field or a component that looks like an input field.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default InputPasswordPage;
