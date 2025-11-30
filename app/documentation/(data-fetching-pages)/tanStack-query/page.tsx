import { Metadata } from 'next';
import {
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_TANSTACK_QUERY_CODE,
    TANSTACK_QUERY_CODE,
    TANSTACK_QUERY_TYPE_CODE,
    TANSTACK_QUERY_ADD_TODO_CODE,
    TANSTACK_QUERY_TODO_CODE,
    TANSTACK_QUERY_DEMO_CODE,
    TANSTACK_QUERY_PROVIDER_USAGE_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import TanStackQueryDemo from './TanStackQueryDemo';

export const metadata: Metadata = {
    title: 'TanStack Query',
};

export default function TanStackQueryPage() {
    const preview: IDocumentationPreview = {
        demo: <TanStackQueryDemo />,
        code: TANSTACK_QUERY_DEMO_CODE,
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
                { label: 'TanStack Query', code: NPM_TANSTACK_QUERY_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Todo.ts', code: TANSTACK_QUERY_TYPE_CODE },
                { label: 'useTodoQuery.tsx', code: TANSTACK_QUERY_CODE },
                { label: 'AddTodo.tsx', code: TANSTACK_QUERY_ADD_TODO_CODE },
                { label: 'Todo.tsx', code: TANSTACK_QUERY_TODO_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [TANSTACK_QUERY_PROVIDER_USAGE_CODE, TANSTACK_QUERY_DEMO_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'TanStack Query',
        description: 'Powerful asynchronous state management for TS/JS and React.',
        links: [{ href: 'https://tanstack.com/query/latest/docs/framework/react/overview', name: 'Docs' }],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
