import { Metadata } from 'next';
import {
    ALERT_CODE,
    ALERT_WRAPPER_CODE,
    ALERT_TITLE_CODE,
    ALERT_DESCRIPTION_CODE,
    ALERT_DEMO_CODE,
    ALERT_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import { AlertDemo } from './AlertDemo';

export const metadata: Metadata = {
    title: 'Alert'
};

const AlertPage = () => {
    const preview: IDocumentationPreview = {
        demo: <AlertDemo />,
        code: ALERT_DEMO_CODE
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
                { label: 'Lucide', code: NPM_LUCIDE_CODE }
            ]
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Alert',
            description: (
                <Text>
                    Include a custom <span className="badge-item">Alert</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: ALERT_CODE },
                { label: 'AlertWrapper.tsx', code: ALERT_WRAPPER_CODE },
                { label: 'AlertTitle.tsx', code: ALERT_TITLE_CODE },
                { label: 'AlertDescription.tsx', code: ALERT_DESCRIPTION_CODE }
            ]
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: (
                <Text>
                    Import the <span className="badge-item">Alert</span> component and use its subcomponents to build
                    your UI.
                </Text>
            ),
            withAccordion: false,
            codeArr: [ALERT_USAGE_CODE]
        }
    ];

    const data: IDocumentationData = {
        title: 'Alert',
        description: 'Displays a callout for user attention.',
        links: [],
        preview,
        codeSections
    };

    return <DocumentationDetailClient data={data} />;
};

export default AlertPage;
