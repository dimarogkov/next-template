import { Metadata } from 'next';
import {
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_HOT_TOAST_CODE,
    TOAST_CODE,
    TOAST_TYPE_CODE,
    TOAST_DEMO_CODE,
    TOAST_USAGE_CODE,
    TOAST_MAIN_USAGE_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import ToastDemo from './ToastDemo';

export const metadata: Metadata = {
    title: 'Toast',
};

export default function ToastPage() {
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
                { label: 'React Hot Toast', code: NPM_HOT_TOAST_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Toast',
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
        description: 'A succinct message that is displayed temporarily using React Hot Toast.',
        links: [{ href: 'https://react-hot-toast.com/docs', name: 'Docs' }],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
