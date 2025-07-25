import { Metadata } from 'next';
import {
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    CHECKBOX_CODE,
    CHECKBOX_USAGE_CODE,
    CHECKBOX_CONTROLLING_USAGE_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { CheckboxPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Checkbox',
};

const CheckboxPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                { label: 'Lucide', code: NPM_LUCIDE_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Checkbox.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Checkbox</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [CHECKBOX_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [CHECKBOX_USAGE_CODE],
        },
        {
            id: 'controlling',
            title: 'Controlling',
            link: '',
            description: (
                <Text>
                    To control the Checkbox, add <span className='badge-item'>checked</span> and&nbsp;
                    <span className='badge-item'>onChange</span> props to manage its state manually.
                </Text>
            ),
            withAccordion: false,
            codeArr: [CHECKBOX_CONTROLLING_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Checkbox',
        description: 'A control that allows the user to toggle between checked and not checked.',
        preview: <CheckboxPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default CheckboxPage;
