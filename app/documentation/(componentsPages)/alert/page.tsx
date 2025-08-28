import { Metadata } from 'next';
import {
    ALERT_CODE,
    ALERT_WRAPPER_CODE,
    ALERT_TITLE_CODE,
    ALERT_DESCRIPTION_CODE,
    ALERT_DEMO_CODE,
    ALERT_USAGE_CODE,
    ALERT_ICON_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { AlertDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Alert',
};

const AlertPage = () => {
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
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Alert',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Alert</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: ALERT_CODE },
                { label: 'AlertWrapper.tsx', code: ALERT_WRAPPER_CODE },
                { label: 'AlertTitle.tsx', code: ALERT_TITLE_CODE },
                { label: 'AlertDescription.tsx', code: ALERT_DESCRIPTION_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [ALERT_ICON_USAGE_CODE, ALERT_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Alert',
        description: 'Displays a callout for user attention.',
        preview: {
            demo: <AlertDemo />,
            code: ALERT_DEMO_CODE,
        },
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default AlertPage;
