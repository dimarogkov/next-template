import { Metadata } from 'next';
import { EnumTitle } from '@/src/types/enums';
import { AddTodo, SearchTodo, TodoList } from '@/src/components/elements';
import { Badge, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Todos Page',
};

const TodosPage = () => {
    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <div className='flex flex-col gap-6 w-full mb-5 last:mb-0'>
                        <Badge>
                            <Badge.Item>Axios</Badge.Item>
                            <Badge.Item>React Query</Badge.Item>
                            <Badge.Item>Debounce</Badge.Item>
                        </Badge>

                        <Title titleType={EnumTitle.h2}>Todos with React Query</Title>
                    </div>

                    <div className='flex flex-col gap-3 w-full mb-6 md:mb-8 last:mb-0'>
                        <SearchTodo />
                        <AddTodo />
                    </div>

                    <TodoList />
                </div>
            </div>
        </section>
    );
};

export default TodosPage;
