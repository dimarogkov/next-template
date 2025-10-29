import { MutableRefObject, Ref } from 'react';

export const assignRefs =
    (...refs: (Ref<HTMLSelectElement> | undefined)[]) =>
    (node: HTMLSelectElement) => {
        refs.forEach((r) => {
            if (!r) {
                return;
            }

            if (typeof r === 'function') {
                r(node);
            } else {
                (r as MutableRefObject<HTMLSelectElement | null>).current = node;
            }
        });
    };
