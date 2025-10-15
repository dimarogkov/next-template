import { useRef } from 'react';

export default function useSectionsRefs() {
    const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});

    const registerRef = (id: string) => (el: HTMLDivElement | null) => {
        sectionsRef.current[id] = el;
    };

    return { sectionsRef, registerRef };
}
