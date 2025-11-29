import { Metadata } from 'next';
import { INPUT_CODE, INPUT_DEMO_CODE, INPUT_USAGE_CODE, INPUT_CONTROLLED_USAGE_CODE } from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import InputDemo from './InputDemo';

export const metadata: Metadata = {
    title: 'Input',
};

export default function InputPage() {
    const preview: IDocumentationPreview = {
        demo: <InputDemo />,
        code: INPUT_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Input',
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
            codeArr: [INPUT_CONTROLLED_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Input',
        description: 'Displays a form input field or a component that looks like an input field.',
        links: [],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
