import { Metadata } from 'next';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import {
    DROPDOWN_UTILS_CODE,
    DROPDOWN_CODE,
    DROPDOWN_WRAPPER_CODE,
    DROPDOWN_TRIGGER_CODE,
    DROPDOWN_CONTENT_CODE,
    DROPDOWN_MENU_CODE,
    DROPDOWN_LABEL_CODE,
    DROPDOWN_SEPARATOR_CODE,
    DROPDOWN_ITEM_CODE,
    DROPDOWN_SUB_MENU_CODE,
    DROPDOWN_SUB_TRIGGER_CODE,
    DROPDOWN_SUB_CONTENT_CODE,
    USE_ESCAPE_KEY_CODE,
    USE_FOCUS_RESTORE_CODE,
    DROPDOWN_DEMO_CODE,
    DROPDOWN_USAGE_CODE,
    DROPDOWN_POSITION_USAGE_CODE,
    DROPDOWN_ALIGN_USAGE_CODE,
    DROPDOWN_DISABLED_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
    NPM_FLOATING_UI_CODE,
    NPM_FRAMER_MOTION_CODE
} from '@code';
import { DropdownDemo } from './DropdownDemo';

export const metadata: Metadata = {
    title: 'Dropdown'
};

const DropdownPage = () => {
    const preview: IDocumentationPreview = {
        demo: <DropdownDemo />,
        code: DROPDOWN_DEMO_CODE
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
                { label: 'Floating UI', code: NPM_FLOATING_UI_CODE }
            ]
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Dropdown',
            description: (
                <Text>
                    Include a custom <span className="badge-item">assignRefs</span> and&nbsp;
                    <span className="badge-item">Dropdown</span> component for consistent and maintainable usage
                    throughout the project. Its content renders through a portal (nested submenus position directly
                    against it) and uses <span className="badge-item">Floating UI</span> for positioning and collision
                    detection, and reuses the <span className="badge-item">useEscapeKey</span> and&nbsp;
                    <span className="badge-item">useFocusRestore</span> hooks for accessibility.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: DROPDOWN_CODE },
                { label: 'assignRefs.ts', code: DROPDOWN_UTILS_CODE },
                { label: 'DropdownWrapper.tsx', code: DROPDOWN_WRAPPER_CODE },
                { label: 'DropdownTrigger.tsx', code: DROPDOWN_TRIGGER_CODE },
                { label: 'DropdownContent.tsx', code: DROPDOWN_CONTENT_CODE },
                { label: 'DropdownMenu.tsx', code: DROPDOWN_MENU_CODE },
                { label: 'DropdownLabel.tsx', code: DROPDOWN_LABEL_CODE },
                { label: 'DropdownSeparator.tsx', code: DROPDOWN_SEPARATOR_CODE },
                { label: 'DropdownItem.tsx', code: DROPDOWN_ITEM_CODE },
                { label: 'DropdownSubMenu.tsx', code: DROPDOWN_SUB_MENU_CODE },
                { label: 'DropdownSubTrigger.tsx', code: DROPDOWN_SUB_TRIGGER_CODE },
                { label: 'DropdownSubContent.tsx', code: DROPDOWN_SUB_CONTENT_CODE },
                { label: 'useEscapeKey.tsx', code: USE_ESCAPE_KEY_CODE },
                { label: 'useFocusRestore.tsx', code: USE_FOCUS_RESTORE_CODE }
            ]
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: (
                <Text>
                    Import the <span className="badge-item">Dropdown</span> component and use its subcomponents to build
                    your UI.
                </Text>
            ),
            withAccordion: false,
            codeArr: [DROPDOWN_USAGE_CODE]
        },
        {
            id: 'position',
            title: 'Position',
            link: '',
            description: (
                <Text>
                    To change the position, add the <span className="badge-item">position</span> prop to the&nbsp;
                    <span className="badge-item">Dropdown.Content</span> child component.
                </Text>
            ),
            withAccordion: false,
            codeArr: [DROPDOWN_POSITION_USAGE_CODE]
        },
        {
            id: 'align',
            title: 'Align',
            link: '',
            description: (
                <Text>
                    To change the align, add the <span className="badge-item">align</span> prop to the&nbsp;
                    <span className="badge-item">Dropdown.Content</span> child component.
                </Text>
            ),
            withAccordion: false,
            codeArr: [DROPDOWN_ALIGN_USAGE_CODE]
        },
        {
            id: 'disabled',
            title: 'Disabled',
            link: '',
            description: (
                <Text>
                    Use the <span className="badge-item">disabled</span> prop on&nbsp;
                    <span className="badge-item">Dropdown.Item</span> to prevent user interaction with that item.
                </Text>
            ),
            withAccordion: false,
            codeArr: [DROPDOWN_DISABLED_USAGE_CODE]
        }
    ];

    const data: IDocumentationData = {
        title: 'Dropdown',
        description:
            'Displays a menu to the user such as a set of actions or functions triggered by a button using Framer Motion.',
        links: [
            { href: 'https://motion.dev/docs/react', name: 'Framer Motion Docs' },
            { href: 'https://floating-ui.com/docs/react-dom', name: 'Floating UI Docs' }
        ],
        preview,
        codeSections
    };

    return <DocumentationDetailClient data={data} />;
};

export default DropdownPage;
