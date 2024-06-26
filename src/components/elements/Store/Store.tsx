'use client';
import { addCount, removeCount, resetCount } from '@/src/store/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../store';

import { Btn, Subtitle, Text } from '../../ui';

const Store = () => {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();

    return (
        <div className='w-full mb-10 last:mb-0'>
            <Subtitle className='mb-5 last:mb-0'>Store</Subtitle>
            <Text className='mb-2 last:mb-0'>{count}</Text>

            <div className='flex flex-col sm:flex-row w-full gap-2'>
                <Btn onClick={() => dispatch(removeCount(5))}>- 5</Btn>
                <Btn onClick={() => dispatch(addCount(5))}>+ 5</Btn>
                <Btn onClick={() => dispatch(resetCount())}>Reset</Btn>
            </div>
        </div>
    );
};

export default Store;
