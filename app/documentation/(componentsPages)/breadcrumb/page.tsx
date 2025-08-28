import { Metadata } from 'next';
import {
    BREADCRUMB_CODE,
    BREADCRUMB_HELPERS_CODE,
    BREADCRUMB_DEMO_CODE,
    BREADCRUMB_USAGE_CODE,
    NPM_LUCIDE_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { BreadcrumbDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Breadcrumb',
};

const BreadcrumbPage = () => {
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
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/blocks/Breadcrumb.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Breadcrumb</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'convertUrlToString.ts', code: BREADCRUMB_HELPERS_CODE },
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
        preview: {
            demo: <BreadcrumbDemo />,
            code: BREADCRUMB_DEMO_CODE,
        },
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default BreadcrumbPage;
