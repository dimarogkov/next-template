export const PIN_INPUT_DEMO_CODE = `'use client';
import { useState } from 'react';
import { PinInput, Text } from '@components/atoms';

export const PinInputDemo = () => {
  const [pin, setPin] = useState('');

  return (
    <div className="relative flex h-36 w-full flex-col items-center justify-center gap-4 text-center">
      <PinInput onComplete={setPin} />
      <Text size="large">Current Pin - {pin || '0000'}</Text>
    </div>
  );
};`;
