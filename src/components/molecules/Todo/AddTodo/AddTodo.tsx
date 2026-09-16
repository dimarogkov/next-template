'use client';
import { useState } from 'react';
import { Btn, Input } from '@components/atoms';

type Props = {
    isLoading: boolean;
    createTodo: (title: string) => void;
};

export const AddTodo = ({ isLoading, createTodo = () => {} }: Props) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleAddTodo = () => {
        createTodo(todoTitle);
        setTodoTitle('');
    };

    return (
        <div className="flex w-full flex-wrap gap-2.5">
            <Input
                name="search"
                placeholder="Add Todo"
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
