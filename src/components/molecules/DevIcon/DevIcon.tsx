'use client';
import { useEffect, useState } from 'react';
import { IDevIcon } from '@interfaces/DevIcon';
import { Text } from '@components/atoms';
import cn from 'classnames';

type Props = {
    devIcon: IDevIcon;
    className?: string;
};

export const DevIcon = ({ devIcon, className = '' }: Props) => {
    const [isMount, setIsMount] = useState(false);
    const { icon, text } = devIcon;

    useEffect(() => {
        setIsMount(true);
    }, []);

    return (
        <div
            className={cn(
                'border-border relative flex items-center gap-2 rounded-full border px-3.5 py-1 whitespace-nowrap',
                className
            )}
        >
            {!isMount ? <span className="bg-text size-5 rounded-full" /> : <i className={`text-xl ${icon}`} />}
            <Text className="w-fit! select-none">{text}</Text>
        </div>
    );
};
