'use client';
import { FC } from 'react';
import { useCount } from '@/src/store/zustand';
import { EnumTitle } from '@/src/types/enums/Title';
import { Btn, Text, Title } from '../ui';

type Props = {
    className?: string;
};

const StoreZustand: FC<Props> = ({ className = '' }) => {
    const { count, addCount, removeCount, resetCount } = useCount((state) => state);

    return (
        <div className={`w-full ${className}`}>
            <Title titleType={EnumTitle.h3} className='mb-5 last:mb-0'>
                Store with Zustand
            </Title>

            <Text className='mb-2 last:mb-0'>{count}</Text>

            <div className='flex flex-col sm:flex-row w-full gap-2'>
                <Btn onClick={() => removeCount(5)}>- 5</Btn>
                <Btn onClick={() => addCount(5)}>+ 5</Btn>
                <Btn onClick={() => resetCount()}>Reset</Btn>
            </div>
        </div>
    );
};

export default StoreZustand;
