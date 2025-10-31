import { Metadata } from 'next';
import {
    BREADCRUMB_CODE,
    BREADCRUMB_UTILS_CODE,
    BREADCRUMB_DEMO_CODE,
    BREADCRUMB_USAGE_CODE,
    NPM_LUCIDE_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import BreadcrumbDemo from './BreadcrumbDemo';

export const metadata: Metadata = {
    title: 'Breadcrumb',
};

export default function BreadcrumbPage() {
    const preview: IDocumentationPreview = {
        demo: <BreadcrumbDemo />,
        code: BREADCRUMB_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [NPM_LUCIDE_CODE],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Breadcrumb',
            description: (
                <Text>
                    Include a and custom <span className='badge-item'>convertUrlToString</span> and&nbsp;
                    <span className='badge-item'>Breadcrumb</span> component for consistent and maintainable usage
                    throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'convertUrlToString.ts', code: BREADCRUMB_UTILS_CODE },
                { label: 'Breadcrumb.tsx', code: BREADCRUMB_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [BREADCRUMB_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Breadcrumb',
        description: 'Displays the path to the current resource using a hierarchy of links.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
