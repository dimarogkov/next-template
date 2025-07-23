import { useRef } from 'react';

export const useSectionsRefs = () => {
    const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});

    const registerRef = (id: string) => (el: HTMLDivElement | null) => {
        sectionsRef.current[id] = el;
    };

    return { sectionsRef, registerRef };
};
