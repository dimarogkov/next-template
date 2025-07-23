import { useRef } from 'react';

const useSectionsRefs = () => {
    const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});

    const registerRef = (id: string) => (el: HTMLDivElement | null) => {
        sectionsRef.current[id] = el;
    };

    return { sectionsRef, registerRef };
};

export default useSectionsRefs;
