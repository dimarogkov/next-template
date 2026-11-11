import { MutableRefObject, useEffect, useState } from 'react';
import { IComponentsSection } from '@interfaces/ComponentsSection';

export const useActiveSection = (
    sectionsRef: MutableRefObject<Record<string, HTMLElement | null>>,
    sectionsArr: IComponentsSection[]
) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const intersecting: Record<string, boolean> = {};

        const updateActiveSection = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;

            if (isAtBottom) {
                setActiveSection(sectionsArr[sectionsArr.length - 1]?.id ?? '');
                return;
            }

            const active = [...sectionsArr].reverse().find(({ id }) => intersecting[id]);
            setActiveSection(active?.id ?? '');
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    intersecting[entry.target.id] = entry.isIntersecting;
                });

                updateActiveSection();
            },
            { rootMargin: '0px 0px -66% 0px' }
        );

        sectionsArr.forEach(({ id }) => {
            const el = sectionsRef.current[id];
            el && observer.observe(el);
        });

        window.addEventListener('scroll', updateActiveSection);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', updateActiveSection);
        };
    }, [sectionsRef, sectionsArr]);

    return activeSection;
};
