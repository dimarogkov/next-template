import { Metadata } from 'next';
import { NPM_ZUSTAND_CODE, ZUSTAND_DEMO_CODE, ZUSTAND_CODE, ZUSTAND_COUNT_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { ZustandDemo } from '@/src/components/elements/demo';

export const metadata: Metadata = {
    title: 'Zustand',
};

const ZustandPage = () => {
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
        preview: {
            demo: <ZustandDemo />,
            code: ZUSTAND_DEMO_CODE,
        },
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default ZustandPage;
