import { MutableRefObject, Ref } from 'react';

export const assignRefs =
    <T>(...refs: (Ref<T> | undefined)[]) =>
    (node: T) => {
        refs.forEach((r) => {
            if (!r) {
                return;
            }

            if (typeof r === 'function') {
                r(node);
            } else {
                (r as MutableRefObject<T | null>).current = node;
            }
        });
    };
