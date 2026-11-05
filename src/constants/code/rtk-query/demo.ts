export const RTK_QUERY_DEMO_CODE = `'use client';
import toast from 'react-hot-toast';
import { ITodo } from '@interfaces/Todo';
import {
  useCreateTodoMutation,
  useGetTodosQuery,
  useRemoveTodoMutation,
  useUpdateTodoMutation
} from '@store/redux-toolkit/todosApiSlice';
import { AddTodo, Todo } from '@components/molecules';
import { ErrorMessage, Toast } from '@components/atoms';

const LOADER_ITEMS = Array.from({ length: 6 }, (_, index) => index + 1);

export const RtkQueryDemo = () => {
  const { data: todos, isLoading, isError } = useGetTodosQuery();
  const [createTodoMutation, { isLoading: isLoadingCreateTodo }] = useCreateTodoMutation();
  const [updateTodoMutation, { isLoading: isLoadingUpdateTodo }] = useUpdateTodoMutation();
  const [removeTodoMutation, { isLoading: isLoadingRemoveTodo }] = useRemoveTodoMutation();

  const createTodo = (title: string) => {
    if (title.trim() === '') {
      return;
    }

    const newTodo = {
      userId: 1,
      title: title.trim(),
      completed: false
    };

    createTodoMutation(newTodo)
      .unwrap()
      .then(() => {
        toast.custom((t) => (
          <Toast
            toast={t}
            type="success"
            data={{ title: 'Todo added', text: \`"\${newTodo.title}" was added.\` }}
          />
        ));
      })
      .catch(() => {
        toast.custom((t) => (
          <Toast
            toast={t}
            type="error"
            data={{ title: 'Failed to add todo', text: \`"\${newTodo.title}" could not be added.\` }}
          />
        ));
      });
  };

  const updateTodo = (todo: ITodo) => {
    const nextCompleted = !todo.completed;

    updateTodoMutation({ ...todo, completed: nextCompleted })
      .unwrap()
      .then(() => {
        toast.custom((t) => (
          <Toast
            toast={t}
            type="warning"
            data={{
              title: 'Todo updated',
              text: \`"\${todo.title}" marked as \${nextCompleted ? 'complete' : 'incomplete'}.\`
            }}
          />
        ));
      })
      .catch(() => {
        toast.custom((t) => (
          <Toast
            toast={t}
            type="error"
            data={{ title: 'Failed to update todo', text: \`"\${todo.title}" could not be updated.\` }}
          />
        ));
      });
  };

  const removeTodo = (todoId: number) => {
    const removedTodo = todos?.find((item) => item.id === todoId);

    removeTodoMutation(todoId)
      .unwrap()
      .then(() => {
        toast.custom((t) => (
          <Toast
            toast={t}
            type="error"
            data={{
              title: 'Todo removed',
              text: removedTodo ? \`"\${removedTodo.title}" was removed.\` : 'Todo has been removed.'
            }}
          />
        ));
      })
      .catch(() => {
        toast.custom((t) => (
          <Toast
            toast={t}
            type="error"
            data={{
              title: 'Failed to remove todo',
              text: removedTodo
                ? \`"\${removedTodo.title}" could not be removed.\`
                : 'Todo could not be removed.'
            }}
          />
        ));
      });
  };

  return (
    <div className="relative w-full">
      <div className="mb-6 w-full last:mb-0">
        <AddTodo isLoading={isLoadingCreateTodo} createTodo={createTodo} />
      </div>

      {isLoading && (
        <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
          {LOADER_ITEMS.map((item) => (
            <div key={item} className="bg-border h-40 w-full animate-pulse rounded-md" />
          ))}
        </div>
      )}

      {isError && (
        <div className="relative flex h-24 w-full items-center justify-center">
          <ErrorMessage>Failed to load todos.</ErrorMessage>
        </div>
      )}

      {todos && (
        <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              isLoading={isLoadingUpdateTodo || isLoadingRemoveTodo}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};`;
