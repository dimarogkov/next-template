import { RefObject, useEffect } from 'react';

export const useFocusTrap = (containerRef: RefObject<HTMLElement | null>, isActive?: boolean) => {
    useEffect(() => {
        if (!isActive) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Tab' || !containerRef.current) return;

            const focusable = containerRef.current.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (!first || !last) return;

            const isFirstFocused = document.activeElement === first;
            const isLastFocused = document.activeElement === last;
            const shouldWrap = (e.shiftKey && isFirstFocused) || (!e.shiftKey && isLastFocused);

            if (!shouldWrap) return;

            e.preventDefault();
            (e.shiftKey ? last : first).focus();
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [containerRef, isActive]);
};
