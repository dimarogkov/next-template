import { Metadata } from 'next';
import { BtnLink, Title } from '@/src/components/ui';
import AddTodo from '@/src/components/elements/AddTodo/AddTodo';
import TodoList from '@/src/components/elements/TodoList/TodoList';

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

                <Title className='mb-5 last:mb-0'>Todos with React Query</Title>
            </div>

            <AddTodo />
            <TodoList />
        </section>
    );
};

export default TodosPage;
