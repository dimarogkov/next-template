import { Metadata } from 'next';
import { AddTodo, BackLink, Breadcrumbs, SearchTodo, TodoList } from '@/src/components/elements';
import { Badge, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Todos Page',
};

const TodosPage = () => {
    return (
        <section className='relative w-full'>
            <div className='flex flex-col gap-6 w-full mb-5 last:mb-0'>
                <BackLink />
                <Breadcrumbs />

                <Badge>
                    <Badge.Item>Axios</Badge.Item>
                    <Badge.Item>React Query</Badge.Item>
                    <Badge.Item>Debounce</Badge.Item>
                </Badge>

                <Title>Todos with React Query</Title>
            </div>

            <div className='flex flex-col gap-3 w-full mb-6 md:mb-8 last:mb-0'>
                <SearchTodo />
                <AddTodo />
            </div>

            <TodoList />
        </section>
    );
};

export default TodosPage;
