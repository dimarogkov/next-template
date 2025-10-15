import { Metadata } from 'next';
import { NPM_ZUSTAND_CODE, ZUSTAND_CODE, ZUSTAND_COUNT_CODE, ZUSTAND_DEMO_CODE } from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import ZustandDemo from './ZustandDemo';

export const metadata: Metadata = {
    title: 'Zustand',
};

export default function ZustandPage() {
    const preview: IDocumentationPreview = {
        demo: <ZustandDemo />,
        code: ZUSTAND_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [NPM_ZUSTAND_CODE],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/store/zustand',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: ZUSTAND_CODE },
                { label: 'count.ts', code: ZUSTAND_COUNT_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [ZUSTAND_DEMO_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Zustand',
        description: 'A small, fast, and scalable bearbones state management solution.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
