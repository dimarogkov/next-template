import { Metadata } from 'next';
import {
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_REACT_QUERY_CODE,
    REACT_QUERY_CODE,
    REACT_QUERY_TYPE_CODE,
    REACT_QUERY_ADD_TODO_CODE,
    REACT_QUERY_TODO_CODE,
    REACT_QUERY_DEMO_CODE,
    REACT_QUERY_PROVIDER_USAGE_CODE,
} from '@/src/variables/code';
import {
    IDocumentationData,
    IDocumentationCodeSection,
    IDocumentationPreview,
} from '@/src/types/interfaces/Documentation';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { ReactQueryDemo } from '@/src/components/elements/demo';

export const metadata: Metadata = {
    title: 'React Query',
};

const ReactQueryPage = () => {
    const preview: IDocumentationPreview = {
        demo: <ReactQueryDemo />,
        code: REACT_QUERY_DEMO_CODE,
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
                { label: 'React Query', code: NPM_REACT_QUERY_CODE },
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
                { label: 'useTodoQuery.tsx', code: REACT_QUERY_CODE },
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
            codeArr: [REACT_QUERY_PROVIDER_USAGE_CODE, REACT_QUERY_DEMO_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'React Query',
        description: 'Powerful asynchronous state management for TS/JS and React.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default ReactQueryPage;
