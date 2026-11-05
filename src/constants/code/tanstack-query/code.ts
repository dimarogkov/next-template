export const TANSTACK_QUERY_CODE = `import { useMutation, useQuery } from '@tanstack/react-query';
import { getTodos, createTodo, updateTodo, removeTodo } from '@services/todo';

export const useTodoQuery = () => {
  const {
    data: todos,
    refetch,
    isLoading,
    isError
  } = useQuery({
    queryFn: () => getTodos(),
    select: (data) => data.data,
    queryKey: ['todos']
  });

  const { mutate: createTodoMutation, isPending: isLoadingCreateTodo } = useMutation({
    mutationFn: createTodo,
    mutationKey: ['create todo'],
    onSuccess: () => refetch()
  });

  const { mutate: updateTodoMutation, isPending: isLoadingUpdateTodo } = useMutation({
    mutationFn: updateTodo,
    mutationKey: ['update todo'],
    onSuccess: () => refetch()
  });

  const { mutate: removeTodoMutation, isPending: isLoadingRemoveTodo } = useMutation({
    mutationFn: removeTodo,
    mutationKey: ['remove todo'],
    onSuccess: () => refetch()
  });

  return {
    todos,
    isLoading,
    isError,
    createTodoMutation,
    isLoadingCreateTodo,
    updateTodoMutation,
    isLoadingUpdateTodo,
    removeTodoMutation,
    isLoadingRemoveTodo
  };
};`;

export const TANSTACK_QUERY_TYPE_CODE = `export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}`;

export const TANSTACK_QUERY_ADD_TODO_CODE = `'use client';
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
};`;

export const TANSTACK_QUERY_TODO_CODE = `'use client';
import { ITodo } from '@interfaces/Todo';
import { Btn, Text, Title } from '@components/atoms';
import { Check, X } from 'lucide-react';
import cn from 'classnames';

type Props = {
  todo: ITodo;
  isLoading: boolean;
  updateTodo: (todo: ITodo) => void;
  removeTodo: (todoId: number) => void;
};

export const Todo = ({ todo, isLoading, updateTodo, removeTodo }: Props) => {
  const { id, title, userId, completed } = todo;

  return (
    <div
      className={cn(
        'relative flex h-40 w-full flex-col gap-4 rounded-md border p-4 transition-opacity duration-300',
        {
          'border-border': !completed,
          'border-green bg-green/10': completed,
          'pointer-events-none opacity-70': isLoading
        }
      )}
    >
      <button
        type="button"
        aria-label="Remove todo"
        onClick={() => removeTodo(id)}
        className="absolute top-1.5 right-1.5 cursor-pointer outline-hidden transition-opacity duration-300 hover:opacity-65"
      >
        <X aria-hidden="true" className="size-5" />
      </button>

      <div className="w-full grow pr-4">
        <Title size="h4" className="mb-1 truncate last:mb-0">
          {title}
        </Title>

        {userId && <Text>User ID - {userId}</Text>}
      </div>

      <Btn variant="secondary" onClick={() => updateTodo(todo)} className="sm:w-full!">
        {completed ? <X className="size-5" /> : <Check className="size-5" />}
        <span>{completed ? 'Uncomplete' : 'Complete'}</span>
      </Btn>
    </div>
  );
};`;
