export interface IToast {
    id: string;
    type: string;
    title: string;
    text: string;
    timeoutId: NodeJS.Timeout | null;
}
