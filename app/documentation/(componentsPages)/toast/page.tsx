import { Metadata } from 'next';
import {
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_HOT_TOAST_CODE,
    TOAST_DEMO_CODE,
    TOAST_TYPE_CODE,
    TOAST_CODE,
    TOAST_USAGE_CODE,
    TOAST_MAIN_USAGE_CODE,
} from '@/src/variables/code';
import {
    IDocumentationData,
    IDocumentationCodeSection,
    IDocumentationPreview,
} from '@/src/types/interfaces/Documentation';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { ToastDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Toast',
};

const ToastPage = () => {
    const preview: IDocumentationPreview = {
        demo: <ToastDemo />,
        code: TOAST_DEMO_CODE,
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
                { label: 'Hot Toast', code: NPM_HOT_TOAST_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Toast.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>IToastData</span> and&nbsp;
                    <span className='badge-item'>Toast</span> component for consistent and maintainable usage throughout
                    the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'ToastData.ts', code: TOAST_TYPE_CODE },
                { label: 'Toast.tsx', code: TOAST_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [TOAST_MAIN_USAGE_CODE, TOAST_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Toast',
        description: 'A succinct message that is displayed temporarily.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default ToastPage;
