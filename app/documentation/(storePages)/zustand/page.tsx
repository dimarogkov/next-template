import { Metadata } from 'next';
import { NPM_ZUSTAND_CODE, ZUSTAND_CODE, ZUSTAND_COUNT_CODE, ZUSTAND_USAGE_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { ZustandPreview } from '@/src/components/elements/preview';

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
            codeArr: [ZUSTAND_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Zustand',
        description: 'A small, fast, and scalable bearbones state management solution.',
        preview: <ZustandPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default ZustandPage;
