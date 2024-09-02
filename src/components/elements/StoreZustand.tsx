'use client';
import { useCount } from '@/src/storeZustand/count';
import { Btn, Subtitle, Text } from '../ui';

type Props = {
    className?: string;
};

const StoreZustand: React.FC<Props> = ({ className = '' }) => {
    const { count, addCount, removeCount, resetCount } = useCount((state) => state);

    return (
        <div className={`w-full ${className}`}>
            <Subtitle className='mb-5 last:mb-0'>Store with Zustand</Subtitle>
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
