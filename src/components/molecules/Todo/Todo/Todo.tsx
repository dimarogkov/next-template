'use client';
import { ITodo } from '@interfaces/Todo';
import { Btn, Text, Title } from '@components/atoms';
import { X } from 'lucide-react';
import cn from 'classnames';

type Props = {
    todo: ITodo;
    isLoading: boolean;
    updateTodo: (todo: ITodo) => void;
    removeTodo: (todoId: number) => void;
};

export default function Todo({ todo, isLoading, updateTodo = () => {}, removeTodo = () => {} }: Props) {
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
}
