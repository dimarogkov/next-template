import { useMutation, useQuery } from '@tanstack/react-query';
import { getTodos, createTodo, updateTodo, removeTodo } from '@services/todo';

export default function useTodoQuery() {
    const {
        data: todos,
        refetch,
        isLoading,
    } = useQuery({
        queryFn: () => getTodos(),
        select: (data) => data.data,
        queryKey: ['todos'],
    });

    const { mutate: createTodoMutation, isPending: isLoadingCreateTodo } = useMutation({
        mutationFn: createTodo,
        mutationKey: ['create todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: updateTodoMutation, isPending: isLoadingUpdateTodo } = useMutation({
        mutationFn: updateTodo,
        mutationKey: ['update todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: removeTodoMutation, isPending: isLoadingRemoveTodo } = useMutation({
        mutationFn: removeTodo,
        mutationKey: ['remove todo'],
        onSuccess: () => refetch(),
    });

    return {
        todos,
        isLoading,
        createTodoMutation,
        isLoadingCreateTodo,
        updateTodoMutation,
        isLoadingUpdateTodo,
        removeTodoMutation,
        isLoadingRemoveTodo,
    };
}
