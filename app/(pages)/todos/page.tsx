import { Metadata } from 'next';
import { AddTodo, BackLink, Breadcrumbs, SearchTodo, TodoList } from '@/src/components/elements';
import { Badge, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Todos Page',
};

const TodosPage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <BackLink className='mb-6 last:mb-0' />

                <Breadcrumbs className='mb-6 last:mb-0' />

                <Badge className='mb-6 last:mb-0'>
                    <Badge.Item>Axios</Badge.Item>
                    <Badge.Item>React Query</Badge.Item>
                    <Badge.Item>Debounce</Badge.Item>
                </Badge>

                <Title>Todos with React Query</Title>
            </div>

            <SearchTodo />
            <AddTodo />
            <TodoList />
        </section>
    );
};

export default TodosPage;
