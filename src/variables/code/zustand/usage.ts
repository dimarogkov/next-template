export const ZUSTAND_USAGE_CODE = `import { useCount } from '../../../store/zustand';
import { Btn, Text, Title } from '../../ui';

export const ZustandPreview = () => {
    const { count, addCount, removeCount, resetCount } = useCount((state) => state);

    return (
        <div className='relative w-full'>
            <Title size='h3'>Count</Title>
            <Text size='large'>{count}</Text>

            <div className='flex flex-col sm:flex-row w-full gap-2.5'>
                <Btn onClick={() => removeCount(5)}>- 5</Btn>
                <Btn onClick={() => addCount(5)}>+ 5</Btn>
                <Btn variant='outline' onClick={() => resetCount()}>Reset</Btn>
            </div>
        </div>
    );
};`;
