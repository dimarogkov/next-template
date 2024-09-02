import { Metadata } from 'next';
import { AddTodo, SearchTodo, TodoList } from '@/src/components/elements';
import { Badge, BtnLink, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Todos Page',
};

const TodosPage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <BtnLink href='/' className='mb-5 last:mb-0'>
                    Back
                </BtnLink>

                <div className='flex gap-2 mb-5 last:mb-0'>
                    <Badge>Axios</Badge>
                    <Badge>React Query</Badge>
                    <Badge>Debounce</Badge>
                </div>

                <Title>Todos with React Query</Title>
            </div>

            <SearchTodo />
            <AddTodo />
            <TodoList />
        </section>
    );
};

export default TodosPage;
