import { Metadata } from 'next';
import {
    NPM_HOOK_FORM_CODE,
    NPM_HOOK_FORM_RESOLVERS_CODE,
    NPM_ZOD_CODE,
    ZOD_CODE,
    ZOD_SCHEMA_CODE,
    ZOD_USAGE_CODE,
    ZOP_OPTIONS_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { ZodPreview } from '@/src/components/elements/preview';

export const metadata: Metadata = {
    title: 'Zod',
};

const ZodPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Zod', code: NPM_ZOD_CODE },
                { label: 'React Hook Form', code: NPM_HOOK_FORM_CODE },
                { label: 'Resolvers', code: NPM_HOOK_FORM_RESOLVERS_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/form-validation/zod',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: ZOD_CODE },
                { label: 'formOptions.ts', code: ZOP_OPTIONS_CODE },
                { label: 'schema.ts', code: ZOD_SCHEMA_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [ZOD_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Validation with Zod',
        description:
            'A popular schema validation library seamlessly integrated with React Hook Form for building dynamic and reliable forms.',
        preview: <ZodPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default ZodPage;
