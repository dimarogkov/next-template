export const ZUSTAND_DEMO_CODE = `'use client';
import { useCount } from '@store/zustand';
import { Btn, Text, Title } from '@components/atoms';
import { RotateCcw } from 'lucide-react';

export default function ZustandDemo() {
    const { count, addCount, removeCount, resetCount } = useCount((state) => state);

    return (
        <div className='relative w-full'>
            <Title size='h3' className='mb-5 last:mb-0'>
                Count
            </Title>

            <Text size='large' className='font-medium text-title mb-2 last:mb-0'>
                {count}
            </Text>

            <div className='flex flex-col sm:flex-row w-full gap-2.5'>
                <Btn onClick={() => removeCount(5)}>- 5</Btn>
                <Btn onClick={() => addCount(5)}>+ 5</Btn>

                <Btn variant='outline' onClick={() => resetCount()}>
                    <RotateCcw className='size-5' />
                    <span>Reset</span>
                </Btn>
            </div>
        </div>
    );
}`;
