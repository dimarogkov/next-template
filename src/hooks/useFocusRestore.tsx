import { RefObject, useEffect, useRef } from 'react';

export const useFocusRestore = (containerRef: RefObject<HTMLElement | null>, isActive?: boolean) => {
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);
    const wasActiveRef = useRef(false);

    if (isActive && !wasActiveRef.current) {
        previouslyFocusedRef.current = document.activeElement as HTMLElement;
    }

    wasActiveRef.current = !!isActive;

    useEffect(() => {
        if (!isActive) {
            previouslyFocusedRef.current?.focus();
            return;
        }

        if (!containerRef.current?.contains(document.activeElement)) {
            containerRef.current?.focus();
        }
    }, [containerRef, isActive]);
};
