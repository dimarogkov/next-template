export const canTriggerGlobalSearchShortcut = (target: Element | null) => {
    const isEditable =
        target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || (target as HTMLElement)?.isContentEditable;
    const isInsideDialog = target?.closest('[role="dialog"]') !== null;

    return !isEditable && !isInsideDialog;
};
