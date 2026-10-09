import { useEffect } from 'react';

export const useEscapeKey = (onEscape: () => void, isActive?: boolean) => {
    useEffect(() => {
        if (!isActive) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onEscape();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onEscape, isActive]);
};
