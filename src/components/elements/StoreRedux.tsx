'use client';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/store/redux';
import { addCount, removeCount, resetCount } from '@/src/store/redux/countReducer';
import { EnumTitle } from '@/src/types/enums/Title';
import { Btn, Text, Title } from '../ui';

type Props = {
    className?: string;
};

const StoreRedux: FC<Props> = ({ className = '' }) => {
    const count = useAppSelector((state) => state.count.count);
    const dispatch = useAppDispatch();

    return (
        <div className={`w-full ${className}`}>
            <Title titleType={EnumTitle.h3} className='mb-5 last:mb-0'>
                Store with Redux
            </Title>

            <Text className='mb-2 last:mb-0'>{count}</Text>

            <div className='flex flex-col sm:flex-row w-full gap-2'>
                <Btn onClick={() => dispatch(removeCount(5))}>- 5</Btn>
                <Btn onClick={() => dispatch(addCount(5))}>+ 5</Btn>
                <Btn onClick={() => dispatch(resetCount())}>Reset</Btn>
            </div>
        </div>
    );
};

export default StoreRedux;
