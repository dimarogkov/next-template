'use client';
import { FC, useState } from 'react';
import { Btn, Input } from '@/src/components/ui';

type Props = {
    isLoading: boolean;
    createTodo: (title: string) => void;
};

const AddTodo: FC<Props> = ({ isLoading, createTodo = () => {} }) => {
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
};

export default AddTodo;
