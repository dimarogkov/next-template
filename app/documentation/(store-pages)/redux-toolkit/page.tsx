import { Metadata } from 'next';
import {
    NPM_REDUX_TOOLKIT_CODE,
    REDUX_TOOLKIT_CODE,
    REDUX_TOOLKIT_PROVIDER_CODE,
    REDUX_TOOLKIT_COUNT_CODE,
    REDUX_TOOLKIT_DEMO_CODE,
    REDUX_TOOLKIT_PROVIDER_USAGE_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import ReduxToolkitDemo from './ReduxToolkitDemo';

export const metadata: Metadata = {
    title: 'Redux Toolkit',
};

export default function ReduxToolkitPage() {
    const preview: IDocumentationPreview = {
        demo: <ReduxToolkitDemo />,
        code: REDUX_TOOLKIT_DEMO_CODE,
    };

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
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
