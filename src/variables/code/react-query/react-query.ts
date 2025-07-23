export const REACT_QUERY_CODE = `import { useMutation, useQuery } from '@tanstack/react-query';
import { getTodos, createTodo, updateTodo, removeTodo } from '../services';

export const useTodoQuery = () => {
    const {
        data: todos,
        refetch,
        isLoading,
    } = useQuery({
        queryFn: () => getTodos(),
        select: (data) => data.data,
        queryKey: ['todos'],
    });

    const { mutate: createTodoMutation, isPending: isLoadingCreateTodo } = useMutation({
        mutationFn: createTodo,
        mutationKey: ['create todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: updateTodoMutation, isPending: isLoadingUpdateTodo } = useMutation({
        mutationFn: updateTodo,
        mutationKey: ['update todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: removeTodoMutation, isPending: isLoadingRemoveTodo } = useMutation({
        mutationFn: removeTodo,
        mutationKey: ['remove todo'],
        onSuccess: () => refetch(),
    });

    return {
        todos,
        isLoading,
        createTodoMutation,
        isLoadingCreateTodo,
        updateTodoMutation,
        isLoadingUpdateTodo,
        removeTodoMutation,
        isLoadingRemoveTodo,
    };
};`;

export const REACT_QUERY_TYPE_CODE = `export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}`;

export const REACT_QUERY_ADD_TODO_CODE = `import { FC, useState } from 'react';
import { Btn, Input } from '../ui';

type Props = {
    isLoading: boolean;
    createTodo: (title: string) => void;
};

export const AddTodo: FC<Props> = ({ isLoading, createTodo = () => {} }) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleAddTodo = () => {
        createTodo(todoTitle);
        setTodoTitle('');
    };

    return (
        <div className='flex flex-wrap w-full gap-2.5'>
            <Input
                name='search'
                placeholder='Add Todo'
                disabled={isLoading}
                value={todoTitle}
                onChange={({ target }) => setTodoTitle(target.value)}
            />

            <Btn disabled={todoTitle.length === 0 || isLoading} onClick={handleAddTodo}>
                {isLoading ? 'Loading...' : 'Add todo'}
            </Btn>
        </div>
    );
};`;

export const REACT_QUERY_TODO_CODE = `import { FC } from 'react';
import { ITodo } from '../../types/interfaces/Todo';
import { Btn, Text, Title } from '../ui';
import { X } from 'lucide-react';
import cn from 'classnames';

type Props = {
    todo: ITodo;
    isLoading: boolean;
    updateTodo: (todo: ITodo) => void;
    removeTodo: (todoId: number) => void;
};

export const Todo: FC<Props> = ({ todo, isLoading, updateTodo = () => {}, removeTodo = () => {} }) => {
    const { id, title, userId, completed } = todo;

    return (
        <div
            className={cn('relative flex flex-col w-full rounded-md border p-4 transition-opacity duration-300', {
                'border-border': !completed,
                'border-green bg-green/10': completed,
                'opacity-70 pointer-events-none': isLoading,
            })}
        >
            <button
                type='button'
                onClick={() => removeTodo(id)}
                className='absolute top-1.5 right-1.5 outline-none transition-opacity duration-300 hover:opacity-65'
            >
                <X className='size-5' />
            </button>

            <div className='flex-grow w-full pr-8 mb-5 last:mb-0'>
                <Title size='h4' className='truncate mb-1 last:mb-0'>
                    {title}
                </Title>

                <Text>User ID - {userId}</Text>
            </div>

            <Btn variant='secondary' onClick={() => updateTodo(todo)} className='sm:!w-full'>
                {completed ? 'Uncomplete' : 'Complete'}
            </Btn>
        </div>
    );
};`;
