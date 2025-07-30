import { Metadata } from 'next';
import {
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_REDUX_TOOLKIT_CODE,
    REACT_QUERY_TYPE_CODE,
    REACT_QUERY_ADD_TODO_CODE,
    REACT_QUERY_TODO_CODE,
    REDUX_TOOLKIT_PROVIDER_USAGE_CODE,
    RTK_QUERY_CODE,
    RTK_QUERY_SLICE_CODE,
    RTK_QUERY_USAGE_CODE,
    REDUX_TOOLKIT_PROVIDER_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { RtkQueryPreview } from '@/src/components/elements/preview';

export const metadata: Metadata = {
    title: 'RTK Query',
};

const RtkQueryPage = () => {
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
                { label: 'Redux Toolkit', code: NPM_REDUX_TOOLKIT_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Todo.ts', code: REACT_QUERY_TYPE_CODE },
                { label: 'index.ts', code: RTK_QUERY_CODE },
                { label: 'StoreProvider.tsx', code: REDUX_TOOLKIT_PROVIDER_CODE },
                { label: 'todosApiSlice.ts', code: RTK_QUERY_SLICE_CODE },
                { label: 'AddTodo.tsx', code: REACT_QUERY_ADD_TODO_CODE },
                { label: 'Todo.tsx', code: REACT_QUERY_TODO_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [REDUX_TOOLKIT_PROVIDER_USAGE_CODE, RTK_QUERY_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'RTK Query',
        description:
            'Powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.',
        preview: <RtkQueryPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default RtkQueryPage;
