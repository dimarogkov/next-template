export const REDUX_TOOLKIT_DEMO_CODE = `'use client';
import { useAppDispatch, useAppSelector } from '@store/redux-toolkit';
import { addCount, removeCount, resetCount } from '@store/redux-toolkit/countSlice';
import { Btn, Text, Title } from '@components/atoms';
import { RotateCcw } from 'lucide-react';

export default function ReduxToolkitDemo() {
    const count = useAppSelector((state) => state.count.count);
    const dispatch = useAppDispatch();

    return (
        <div className='relative w-full'>
            <Title size='h3' className='mb-5 last:mb-0'>
                Count
            </Title>

            <Text size='large' className='font-medium text-title mb-2 last:mb-0'>
                {count}
            </Text>

            <div className='flex flex-col sm:flex-row w-full gap-2.5'>
                <Btn onClick={() => dispatch(removeCount(5))}>- 5</Btn>
                <Btn onClick={() => dispatch(addCount(5))}>+ 5</Btn>

                <Btn variant='outline' onClick={() => dispatch(resetCount())}>
                    <RotateCcw className='size-5' />
                    <span>Reset</span>
                </Btn>
            </div>
        </div>
    );
}`;
