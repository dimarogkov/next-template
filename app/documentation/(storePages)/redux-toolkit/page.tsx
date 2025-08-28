import { Metadata } from 'next';
import {
    NPM_REDUX_TOOLKIT_CODE,
    REDUX_TOOLKIT_DEMO_CODE,
    REDUX_TOOLKIT_CODE,
    REDUX_TOOLKIT_PROVIDER_CODE,
    REDUX_TOOLKIT_COUNT_CODE,
    REDUX_TOOLKIT_PROVIDER_USAGE_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { ReduxToolkitDemo } from '@/src/components/elements/demo';

export const metadata: Metadata = {
    title: 'Redux Toolkit',
};

const ReduxToolkitPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [NPM_REDUX_TOOLKIT_CODE],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/store/redux-toolkit',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: REDUX_TOOLKIT_CODE },
                { label: 'StoreProvider.tsx', code: REDUX_TOOLKIT_PROVIDER_CODE },
                { label: 'countSlice.ts', code: REDUX_TOOLKIT_COUNT_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [REDUX_TOOLKIT_PROVIDER_USAGE_CODE, REDUX_TOOLKIT_DEMO_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Redux Toolkit',
        description: 'The official, opinionated, batteries-included toolset for efficient Redux development.',
        preview: {
            demo: <ReduxToolkitDemo />,
            code: REDUX_TOOLKIT_DEMO_CODE,
        },
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default ReduxToolkitPage;
