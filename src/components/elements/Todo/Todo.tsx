import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Todo as TodoType } from '@/src/types/interfaces/Todo';

import { LuTrash } from 'react-icons/lu';
import { Btn, Subtitle, Text } from '../../ui';
import cn from 'classnames';

type Props = {
    todo: TodoType;
    updateTodo: UseMutateFunction<AxiosResponse<TodoType, any>, Error, TodoType, unknown>;
    removeTodo: UseMutateFunction<AxiosResponse<TodoType, any>, Error, number, unknown>;
};

export const Todo: React.FC<Props> = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, userId, completed } = todo;

    return (
        <div
            className={cn('relative flex flex-col w-full rounded-lg border p-4 pr-12', {
                'border-gray bg-gray/20': !completed,
                'border-green bg-green/15': completed,
            })}
        >
            <button
                className='absolute z-10 top-2 right-2 flex items-center justify-center w-8 h-8 rounded border border-red bg-red/15 transition-opacity duration-300 hover:opacity-70'
                onClick={() => removeTodo(id)}
            >
                <LuTrash className='w-5 h-5 text-red' />
            </button>

            <div className='flex-grow w-full mb-3 last:mb-0'>
                <Subtitle className='mb-2 last:mb-0'>{title}</Subtitle>
                <Text>User ID - {userId}</Text>
            </div>

            <Btn onClick={() => updateTodo(todo)}>{completed ? 'Uncomplete Todo' : 'Complete Todo'}</Btn>
        </div>
    );
};
