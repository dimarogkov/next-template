'use client';
import { useEffect, useState } from 'react';
import { HomeDarkVeil } from '@components/molecules';
import cn from 'classnames';


export default function HomeBg() {
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
            <HomeDarkVeil hueShift={1} speed={1} />
        </div>
    );
}
