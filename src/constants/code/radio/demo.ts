export const RADIO_DEMO_CODE = `'use client';
import { useState } from 'react';
import { Radio } from '@components/atoms';

export const RadioDemo = () => {
  const [selectedValue, setSelectedValue] = useState('paypal');

  return (
    <div className="relative flex w-full flex-col gap-2.5">
      <Radio
        name="radio"
        value="card"
        label="Credit card"
        checked={selectedValue === 'card'}
        onChange={() => setSelectedValue('card')}
      />

      <Radio
        name="radio"
        value="paypal"
        label="PayPal"
        checked={selectedValue === 'paypal'}
        onChange={() => setSelectedValue('paypal')}
      />

      <Radio name="radio" value="apple-pay" label="Apple Pay" disabled />
    </div>
  );
};`;
