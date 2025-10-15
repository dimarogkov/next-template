import { Metadata } from 'next';
import {
    NPM_HOOK_FORM_CODE,
    NPM_HOOK_FORM_RESOLVERS_CODE,
    NPM_YUP_CODE,
    YUP_CODE,
    YUP_SCHEMA_CODE,
    YUP_OPTIONS_CODE,
    YUP_DEMO_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import YupDemo from './YupDemo';

export const metadata: Metadata = {
    title: 'Yup',
};

export default function YupPage() {
    const preview: IDocumentationPreview = {
        demo: <YupDemo />,
        code: YUP_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Yup', code: NPM_YUP_CODE },
                { label: 'React Hook Form', code: NPM_HOOK_FORM_CODE },
                { label: 'Resolvers', code: NPM_HOOK_FORM_RESOLVERS_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/form-validation/yup',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: YUP_CODE },
                { label: 'formOptions.ts', code: YUP_OPTIONS_CODE },
                { label: 'schema.ts', code: YUP_SCHEMA_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [YUP_DEMO_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Validation with Yup',
        description:
            'A popular schema validation library seamlessly integrated with React Hook Form for building dynamic and reliable forms.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
