'use client';
import { Text } from '../../ui';
import { Todo } from '../Todo/Todo';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteTodo, getTodos, updateTodo } from '@/src/services/todos';

const TodoList = () => {
    const {
        data: todos,
        refetch,
        isLoading,
        isSuccess,
    } = useQuery({
        queryFn: () => getTodos(),
        select: (date) => date.data.slice(0, 12),
        queryKey: ['todos'],
    });

    const { mutate: updateTodoMutation, isPending: isPendingUpdateTodo } = useMutation({
        mutationFn: updateTodo,
        mutationKey: ['update todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: removeTodoMutation } = useMutation({
        mutationFn: deleteTodo,
        mutationKey: ['remove todo'],
        onSuccess: () => refetch(),
    });

    return (
        <div>
            {isLoading && <Text>Loading...</Text>}

            {isSuccess && (
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
                    {todos.map((todo) => (
                        <Todo
                            todo={todo}
                            updateTodo={updateTodoMutation}
                            removeTodo={removeTodoMutation}
                            key={todo.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TodoList;
