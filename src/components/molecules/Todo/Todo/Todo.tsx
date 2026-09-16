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

export const Todo = ({ todo, isLoading, updateTodo = () => {}, removeTodo = () => {} }: Props) => {
    const { id, title, userId, completed } = todo;

    return (
        <div
            className={cn('relative flex w-full flex-col rounded-md border p-4 transition-opacity duration-300', {
                'border-border': !completed,
                'border-green bg-green/10': completed,
                'pointer-events-none opacity-70': isLoading
            })}
        >
            <button
                type="button"
                onClick={() => removeTodo(id)}
                className="absolute top-1.5 right-1.5 outline-hidden transition-opacity duration-300 hover:opacity-65"
            >
                <X className="size-5" />
            </button>

            <div className="mb-5 w-full grow pr-8 last:mb-0">
                <Title size="h4" className="mb-1 truncate last:mb-0">
                    {title}
                </Title>

                <Text>User ID - {userId}</Text>
            </div>

            <Btn variant="secondary" onClick={() => updateTodo(todo)} className="sm:w-full!">
                {completed ? 'Uncomplete' : 'Complete'}
            </Btn>
        </div>
    );
};
