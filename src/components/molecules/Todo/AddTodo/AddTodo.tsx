'use client';
import { SubmitEvent, useState } from 'react';
import { Btn, Input } from '@components/atoms';
import { Plus } from 'lucide-react';

type Props = {
    isLoading: boolean;
    createTodo: (title: string) => void;
};

export const AddTodo = ({ isLoading, createTodo }: Props) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleAddTodo = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTodo(todoTitle);
        setTodoTitle('');
    };

    return (
        <form className="flex w-full flex-wrap gap-2.5" onSubmit={handleAddTodo}>
            <Input
                name="title"
                placeholder="Add Todo"
                disabled={isLoading}
                value={todoTitle}
                onChange={({ target }) => setTodoTitle(target.value)}
            />

            <Btn type="submit" variant="secondary" disabled={todoTitle.length === 0 || isLoading}>
                <Plus className="size-5" />
                <span>{isLoading ? 'Loading...' : 'Add todo'}</span>
            </Btn>
        </form>
    );
};
