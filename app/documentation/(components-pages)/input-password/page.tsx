import { Metadata } from 'next';
import {
    INPUT_PASSWORD_CODE,
    INPUT_PASSWORD_DEMO_CODE,
    INPUT_PASSWORD_USAGE_CODE,
    INPUT_PASSWORD_CONTROLLED_USAGE_CODE,
    NPM_LUCIDE_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import InputPasswordDemo from './InputPasswordDemo';

export const metadata: Metadata = {
    title: 'Input Password',
};

export default function InputPasswordPage() {
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
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/InputPassword',
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
        links: [],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
