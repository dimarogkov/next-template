import { Metadata } from 'next';
import {
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
    TABS_ACTIVE_USAGE_CODE,
    TABS_CODE,
    TABS_LIST_CODE,
    TABS_PANEL_CODE,
    TABS_PANELS_CODE,
    TABS_TAB_CODE,
    TABS_USAGE_CODE,
    TABS_WRAPPER_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { TabsPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Tabs',
};

const TabsPage = () => {
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
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Tabs',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Tabs</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: TABS_CODE },
                { label: 'TabsWrapper.tsx', code: TABS_WRAPPER_CODE },
                { label: 'TabsList.tsx', code: TABS_LIST_CODE },
                { label: 'TabsTab.tsx', code: TABS_TAB_CODE },
                { label: 'TabsPanels.tsx', code: TABS_PANELS_CODE },
                { label: 'TabsPanel.tsx', code: TABS_PANEL_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [TABS_USAGE_CODE],
        },
        {
            id: 'active',
            title: 'Active',
            link: '',
            description: (
                <Text>
                    To make an <span className='badge-item'>Tabs.Tab</span> initially active, add the&nbsp;
                    <span className='badge-item'>isActive</span> prop to it.
                </Text>
            ),
            withAccordion: false,
            codeArr: [TABS_ACTIVE_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Tabs',
        description: 'A set of layered sections of content — known as tab panels — that are displayed one at a time.',
        preview: <TabsPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default TabsPage;
