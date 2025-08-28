export const RADIO_USAGE_CODE = `<Radio name='radio' label='Radio' />`;

export const RADIO_CONTROLLED_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Label, Radio } from '@/src/components/ui';

const RadioControlled = () => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <div className='relative flex flex-col gap-2.5 w-full'>
            <Label>
				<Radio
					name='radio'
					value='first_radio'
					label='First Radio'
					checked={selectedValue === 'first_radio'}
					onChange={() => setSelectedValue('first_radio')}
				/>
			</Label>
            
			<Label>
				<Radio
					name='radio'
					value='second_radio'
					label='Second Radio'
					checked={selectedValue === 'second_radio'}
					onChange={() => setSelectedValue('second_radio')}
				/>
			</Label>
        </div>
    );
};

export default RadioControlled;`;
