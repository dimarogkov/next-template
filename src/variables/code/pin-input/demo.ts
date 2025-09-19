export const PIN_INPUT_DEMO_CODE = `'use client';
import { useState } from 'react';
import { PinInput, Text } from '@/src/components/ui';

const PinInputDemo = () => {
    const [pin, setPin] = useState('');

    return (
        <div className='relative flex flex-col items-center justify-center gap-4 text-center w-full h-36'>
            <PinInput onComplete={setPin} />

            <Text size='large'>Current Pin - {pin || '0000'}</Text>
        </div>
    );
};

export default PinInputDemo;`;
