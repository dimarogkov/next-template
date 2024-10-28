'use client';
import { useMemo } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteTodo, getTodos, updateTodo } from '@/src/services/todos';
import { useTodo } from '@/src/storeZustand/todo';

import Todo from './Todo';
import { Text } from '../ui';

const TodoList = () => {
    const { searchValue } = useTodo((state) => state);

    const {
        data: todos,
        refetch,
        isLoading,
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

    const filteredTodos = useMemo(() => {
        if (todos) {
            let arr = [...todos];

            if (searchValue) {
                arr = arr.filter(({ title }) => title.toLowerCase().includes(searchValue.toLowerCase()));
            }

            return arr;
        }
    }, [searchValue, todos]);

    return (
        <div>
            {isLoading && <Text>Loading...</Text>}

            {filteredTodos?.length === 0 && <Text>No todos found. Try searching again.</Text>}

            {filteredTodos && (
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
                    {filteredTodos.map((todo) => (
                        <Todo
                            todo={todo}
                            isPending={isPendingUpdateTodo}
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
