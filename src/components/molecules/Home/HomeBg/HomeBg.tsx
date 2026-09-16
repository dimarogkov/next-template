'use client';
import { useEffect, useState } from 'react';
import { HomeDarkVeil } from '@components/molecules';
import cn from 'classnames';

export const HomeBg = () => {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true);
    }, []);

    return (
        <div
            className={cn('fixed top-0 left-0 h-full w-full transition-all duration-700', {
                'visible opacity-100': isMount,
                'invisible opacity-0': !isMount
            })}
        >
            <HomeDarkVeil hueShift={1} speed={1} />
        </div>
    );
};
