'use client';
import { useEffect, useState } from 'react';
import { IDevIcon } from '@interfaces/DevIcon';
import { Text } from '@components/atoms';

type Props = {
    devIcon: IDevIcon;
    className?: string;
};

export default function DevIcon({ devIcon, className = '' }: Props) {
    const [isMount, setIsMount] = useState(false);
    const { icon, text } = devIcon;

    useEffect(() => {
        setIsMount(true);
    }, []);

    return (
        <div
            className={`group relative flex items-center gap-2 px-3.5 py-1 rounded-full border border-border whitespace-nowrap ${className}`}
        >
            {!isMount ? <span className='size-5 rounded-full bg-text' /> : <i className={`text-xl ${icon}`} />}
            <Text className='select-none !w-fi'>{text}</Text>
        </div>
    );
}
