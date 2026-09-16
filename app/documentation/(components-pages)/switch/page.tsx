import { Metadata } from 'next';
import {
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
    SWITCH_CODE,
    SWITCH_DEMO_CODE,
    SWITCH_USAGE_CODE,
    SWITCH_ACTIVE_USAGE_CODE,
    SWITCH_DISABLED_USAGE_CODE
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import { SwitchDemo } from './SwitchDemo';

export const metadata: Metadata = {
    title: 'Switch'
};

const SwitchPage = () => {
    const preview: IDocumentationPreview = {
        demo: <SwitchDemo />,
        code: SWITCH_DEMO_CODE
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
                { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE }
            ]
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Switch',
            description: (
                <Text>
                    Include a custom <span className="badge-item">Switch</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SWITCH_CODE]
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: (
                <Text>
                    Import the <span className="badge-item">Switch</span> component to build your UI.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SWITCH_USAGE_CODE]
        },
        {
            id: 'active',
            title: 'Active',
            link: '',
            description: (
                <Text>
                    Use the <span className="badge-item">isActive</span> prop to display the switch in its active (on)
                    state.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SWITCH_ACTIVE_USAGE_CODE]
        },
        {
            id: 'disabled',
            title: 'Disabled',
            link: '',
            description: (
                <Text>
                    Use the <span className="badge-item">disabled</span> prop to prevent user interaction with the
                    switch.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SWITCH_DISABLED_USAGE_CODE]
        }
    ];

    const data: IDocumentationData = {
        title: 'Switch',
        description: 'A control that allows the user to toggle between checked and not checked using Framer Motion.',
        links: [{ href: 'https://motion.dev/docs/react', name: 'Docs' }],
        preview,
        codeSections
    };

    return <DocumentationDetailClient data={data} />;
};

export default SwitchPage;
