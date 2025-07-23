'use client';
import { useEffect, useState } from 'react';
import { Aurora } from '@/src/components/other';
import cn from 'classnames';

const HomeBg = () => {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true);
    }, []);

    return (
        <div
            className={cn('absolute top-0 left-0 w-full h-full rotate-180 transition-all duration-500', {
                'opacity-100 visible': isMount,
                'opacity-0 invisible': !isMount,
            })}
        >
            <Aurora colorStops={['#facc15', '#ff94b4', '#ff6467']} blend={0.5} amplitude={1.0} speed={0.3} />
        </div>
    );
};

export default HomeBg;
