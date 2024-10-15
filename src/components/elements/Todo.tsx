import { AxiosResponse } from 'axios';
import { UseMutateFunction } from '@tanstack/react-query';
import { EnumTitle } from '@/src/types/enums/Title';
import { ITodo } from '@/src/types/interfaces/Todo';

import { Btn, Text, Title } from '../ui';
import { Trash2 } from 'lucide-react';
import cn from 'classnames';

type Props = {
    todo: ITodo;
    updateTodo: UseMutateFunction<AxiosResponse<ITodo, any>, Error, ITodo, unknown>;
    removeTodo: UseMutateFunction<AxiosResponse<ITodo, any>, Error, number, unknown>;
};

const Todo: React.FC<Props> = ({ todo, updateTodo = () => {}, removeTodo = () => {} }) => {
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
                <Trash2 className='w-5 h-5 text-red' />
            </button>

            <div className='flex-grow w-full mb-3 last:mb-0'>
                <Title titleType={EnumTitle.h3} className='mb-2 last:mb-0'>
                    {title}
                </Title>

                <Text>User ID - {userId}</Text>
            </div>

            <Btn onClick={() => updateTodo(todo)}>{completed ? 'Uncomplete Todo' : 'Complete Todo'}</Btn>
        </div>
    );
};

export default Todo;
