import { Metadata } from 'next';
import {
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    RADIO_CODE,
    RADIO_USAGE_CODE,
    RADIO_CONTROLLING_USAGE_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { RadioPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Radio',
};

const RadioPage = () => {
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
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Radio.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Radio</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [RADIO_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [RADIO_USAGE_CODE],
        },
        {
            id: 'controlling',
            title: 'Controlling',
            link: '',
            description: (
                <Text>
                    To control the Radio, add <span className='badge-item'>checked</span> and&nbsp;
                    <span className='badge-item'>onChange</span> props to manage its state manually.
                </Text>
            ),
            withAccordion: false,
            codeArr: [RADIO_CONTROLLING_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Radio',
        description:
            'A set of checkable buttons — known as radio buttons — where no more than one of the buttons can be checked at a time.',
        preview: <RadioPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default RadioPage;
