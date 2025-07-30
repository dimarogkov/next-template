'use client';
import { useTodoQuery } from '@/src/hooks';
import { ITodo } from '@/src/types/interfaces/Todo';
import { AddTodo, Todo } from '@/src/components/elements';
import { Loader, Title } from '@/src/components/ui';

const ReactQueryPreview = () => {
    const {
        todos,
        isLoading,
        createTodoMutation,
        isLoadingCreateTodo,
        updateTodoMutation,
        isLoadingUpdateTodo,
        removeTodoMutation,
        isLoadingRemoveTodo,
    } = useTodoQuery();

    const createTodo = (title: string) => {
        if (title.trim() === '') {
            return;
        }

        const newTodo = {
            userId: 1,
            title: title.trim(),
            completed: false,
        };

        createTodoMutation(newTodo);
    };

    const updateTodo = (todo: ITodo) => updateTodoMutation({ ...todo, completed: !todo.completed });
    const removeTodo = (todoId: number) => removeTodoMutation(todoId);

    return (
        <div className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <Title size='h3' className='mb-2.5 last:mb-0'>
                    Todo List
                </Title>

                <AddTodo isLoading={isLoadingCreateTodo} createTodo={createTodo} />
            </div>

            {isLoading && (
                <div className='relative flex items-center justify-center w-full h-24'>
                    <Loader />
                </div>
            )}

            {todos && (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 w-full'>
                    {todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            isLoading={isLoadingUpdateTodo || isLoadingRemoveTodo}
                            updateTodo={updateTodo}
                            removeTodo={removeTodo}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReactQueryPreview;
