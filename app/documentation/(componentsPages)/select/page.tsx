import { Metadata } from 'next';
import {
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_FRAMER_MOTION_CODE,
    SELECT_DEMO_CODE,
    SELECT_TYPE_CODE,
    SELECT_CODE,
    SELECT_WRAPPER_CODE,
    SELECT_TRIGGER_CODE,
    SELECT_OPTIONS_CODE,
    SELECT_OPTION_CODE,
    SELECT_USAGE_CODE,
    SELECT_CONTROLLED_USAGE_CODE,
} from '@/src/variables/code';
import {
    IDocumentationData,
    IDocumentationCodeSection,
    IDocumentationPreview,
} from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { SelectDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Select',
};

const SelectPage = () => {
    const preview: IDocumentationPreview = {
        demo: <SelectDemo />,
        code: SELECT_DEMO_CODE,
    };

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
                { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Select',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>ISelectItem</span> and&nbsp;
                    <span className='badge-item'>Select</span> component for consistent and maintainable usage
                    throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'SelectItem.ts', code: SELECT_TYPE_CODE },
                { label: 'index.ts', code: SELECT_CODE },
                { label: 'SelectWrapper.tsx', code: SELECT_WRAPPER_CODE },
                { label: 'SelectTrigger.tsx', code: SELECT_TRIGGER_CODE },
                { label: 'SelectOptions.tsx', code: SELECT_OPTIONS_CODE },
                { label: 'SelectOption.tsx', code: SELECT_OPTION_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [SELECT_USAGE_CODE],
        },
        {
            id: 'controlled',
            title: 'Controlled',
            link: '',
            description: (
                <Text>
                    To control the Select, add <span className='badge-item'>value</span> and&nbsp;
                    <span className='badge-item'>onChange</span> props to manage its state manually.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SELECT_CONTROLLED_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Select',
        description: 'Displays a list of options for the user to pick from — triggered by a button.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default SelectPage;
