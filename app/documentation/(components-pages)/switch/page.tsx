import { Metadata } from 'next';
import { NPM_CLASSNAMES_CODE, NPM_FRAMER_MOTION_CODE, SWITCH_CODE, SWITCH_DEMO_CODE, SWITCH_USAGE_CODE } from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import SwitchDemo from './SwitchDemo';

export const metadata: Metadata = {
    title: 'Switch',
};

export default function SwitchPage() {
    const preview: IDocumentationPreview = {
        demo: <SwitchDemo />,
        code: SWITCH_DEMO_CODE,
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
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Switch',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Switch</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SWITCH_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [SWITCH_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Switch',
        description: 'A control that allows the user to toggle between checked and not checked using Framer Motion.',
        links: [{ href: 'https://motion.dev/docs/react', name: 'Docs' }],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
