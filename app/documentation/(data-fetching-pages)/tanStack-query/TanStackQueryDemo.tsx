'use client';
import toast from 'react-hot-toast';
import { useTodoQuery } from '@hooks';
import { ITodo } from '@interfaces/Todo';
import { AddTodo, Todo } from '@components/molecules';
import { ErrorMessage, Toast } from '@components/atoms';

const LOADER_ITEMS = Array.from({ length: 6 }, (_, index) => index + 1);

export const TanStackQueryDemo = () => {
    const {
        todos,
        isLoading,
        isError,
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

        createTodoMutation(newTodo, {
            onSuccess: () => {
                toast.custom((t) => (
                    <Toast
                        toast={t}
                        type="success"
                        data={{ title: 'Todo added', text: `"${newTodo.title}" was added.` }}
                    />
                ));
            },
            onError: () => {
                toast.custom((t) => (
                    <Toast
                        toast={t}
                        type="error"
                        data={{ title: 'Failed to add todo', text: `"${newTodo.title}" could not be added.` }}
                    />
                ));
            }
        });
    };

    const updateTodo = (todo: ITodo) => {
        const nextCompleted = !todo.completed;

        updateTodoMutation(
            { ...todo, completed: nextCompleted },
            {
                onSuccess: () => {
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type="warning"
                            data={{
                                title: 'Todo updated',
                                text: `"${todo.title}" marked as ${nextCompleted ? 'complete' : 'incomplete'}.`
                            }}
                        />
                    ));
                },
                onError: () => {
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type="error"
                            data={{ title: 'Failed to update todo', text: `"${todo.title}" could not be updated.` }}
                        />
                    ));
                }
            }
        );
    };

    const removeTodo = (todoId: number) => {
        const removedTodo = todos?.find((item) => item.id === todoId);

        removeTodoMutation(todoId, {
            onSuccess: () => {
                toast.custom((t) => (
                    <Toast
                        toast={t}
                        type="error"
                        data={{
                            title: 'Todo removed',
                            text: removedTodo ? `"${removedTodo.title}" was removed.` : 'Todo has been removed.'
                        }}
                    />
                ));
            },
            onError: () => {
                toast.custom((t) => (
                    <Toast
                        toast={t}
                        type="error"
                        data={{
                            title: 'Failed to remove todo',
                            text: removedTodo
                                ? `"${removedTodo.title}" could not be removed.`
                                : 'Todo could not be removed.'
                        }}
                    />
                ));
            }
        });
    };

    return (
        <div className="relative w-full">
            <div className="mb-6 w-full last:mb-0">
                <AddTodo isLoading={isLoadingCreateTodo} createTodo={createTodo} />
            </div>

            {isLoading && (
                <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
                    {LOADER_ITEMS.map((item) => (
                        <div key={item} className="bg-border h-40 w-full animate-pulse rounded-md" />
                    ))}
                </div>
            )}

            {isError && (
                <div className="relative flex h-24 w-full items-center justify-center">
                    <ErrorMessage>Failed to load todos.</ErrorMessage>
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
