'use client';
import { useEffect, useState } from 'react';
import { DarkVeil } from '@/src/components/other';
import cn from 'classnames';

const HomeBg = () => {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true);
    }, []);

    return (
        <div
            className={cn('fixed top-0 left-0 w-full h-full transition-all duration-700', {
                'opacity-100 visible': isMount,
                'opacity-0 invisible': !isMount,
            })}
        >
            <DarkVeil hueShift={1} speed={1} />
        </div>
    );
};

export default HomeBg;
