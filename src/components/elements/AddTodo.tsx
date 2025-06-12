'use client';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '@/src/services/todos';
import { Btn, Input } from '../ui';

const AddTodo = () => {
    const [todoTitle, setTodoTitle] = useState('');
    const { invalidateQueries } = useQueryClient();

    const { mutate: createTodoMutation, isPending } = useMutation({
        mutationFn: createTodo,
        mutationKey: ['create todo'],
        onSuccess: () => invalidateQueries({ queryKey: ['todos'] }),
    });

    const addTodo = () => {
        if (todoTitle.trim() === '') {
            return;
        }

        const newTodo = {
            userId: 1,
            title: todoTitle.trim(),
            completed: false,
        };

        createTodoMutation(newTodo);
        setTodoTitle('');
    };

    return (
        <div className='flex flex-wrap w-full gap-3'>
            <Input
                name='search'
                placeholder='Add Todo'
                disabled={isPending}
                value={todoTitle}
                onChange={({ target }) => setTodoTitle(target.value)}
            />

            <Btn disabled={todoTitle.length === 0 || isPending} onClick={addTodo}>
                {isPending ? 'Loading...' : 'Add todo'}
            </Btn>
        </div>
    );
};

export default AddTodo;
