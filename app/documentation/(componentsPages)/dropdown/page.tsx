import { Metadata } from 'next';
import {
    DROPDOWN_CODE,
    DROPDOWN_WRAPPER_CODE,
    DROPDOWN_TRIGGER_CODE,
    DROPDOWN_CONTENT_CODE,
    DROPDOWN_DEMO_CODE,
    DROPDOWN_USAGE_CODE,
    DROPDOWN_POSITION_USAGE_CODE,
    DROPDOWN_ALIGN_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
} from '@/src/variables/code';
import {
    IDocumentationData,
    IDocumentationCodeSection,
    IDocumentationPreview,
} from '@/src/types/interfaces/Documentation';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { DropdownDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Dropdown',
};

const DropdownPage = () => {
    const preview: IDocumentationPreview = {
        demo: <DropdownDemo />,
        code: DROPDOWN_DEMO_CODE,
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
                { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Dropdown',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Dropdown</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: DROPDOWN_CODE },
                { label: 'DropdownWrapper.tsx', code: DROPDOWN_WRAPPER_CODE },
                { label: 'DropdownTrigger.tsx', code: DROPDOWN_TRIGGER_CODE },
                { label: 'DropdownContent.tsx', code: DROPDOWN_CONTENT_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [DROPDOWN_USAGE_CODE],
        },
        {
            id: 'position',
            title: 'Position',
            link: '',
            description: (
                <Text>
                    To change the position, add the <span className='badge-item'>position</span> prop to the&nbsp;
                    <span className='badge-item'>Dropdown.Content</span> child component.
                </Text>
            ),
            withAccordion: false,
            codeArr: [DROPDOWN_POSITION_USAGE_CODE],
        },
        {
            id: 'align',
            title: 'Align',
            link: '',
            description: (
                <Text>
                    To change the align, add the <span className='badge-item'>align</span> prop to the&nbsp;
                    <span className='badge-item'>Dropdown.Content</span> child component.
                </Text>
            ),
            withAccordion: false,
            codeArr: [DROPDOWN_ALIGN_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Dropdown',
        description: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default DropdownPage;
