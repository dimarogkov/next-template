'use client';
import { useTodoQuery } from '@hooks';
import { ITodo } from '@interfaces/Todo';
import { AddTodo, Todo } from '@components/molecules';
import { Loader } from '@components/atoms';

export const TanStackQueryDemo = () => {
    const {
        todos,
        isLoading,
        createTodoMutation,
        isLoadingCreateTodo,
        updateTodoMutation,
        isLoadingUpdateTodo,
        removeTodoMutation,
        isLoadingRemoveTodo
    } = useTodoQuery();

    const createTodo = (title: string) => {
        if (title.trim() === '') {
            return;
        }

        const newTodo = {
            userId: 1,
            title: title.trim(),
            completed: false
        };

        createTodoMutation(newTodo);
    };

    const updateTodo = (todo: ITodo) => updateTodoMutation({ ...todo, completed: !todo.completed });
    const removeTodo = (todoId: number) => removeTodoMutation(todoId);

    return (
        <div className="relative w-full">
            <div className="mb-6 w-full last:mb-0">
                <AddTodo isLoading={isLoadingCreateTodo} createTodo={createTodo} />
            </div>

            {isLoading && (
                <div className="relative flex h-24 w-full items-center justify-center">
                    <Loader />
                </div>
            )}

            {todos && (
                <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
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
