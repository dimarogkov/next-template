'use client';
import { useState } from 'react';
import { Label, Radio } from '@/src/components/ui';

const RadioPreview = () => {
    const [selectedValue, setSelectedValue] = useState('checked_radio');

    return (
        <div className='relative flex flex-col gap-2.5 w-full'>
            <Label>
                <Radio
                    name='radio'
                    value='default_radio'
                    label='Default Radio'
                    checked={selectedValue === 'default_radio'}
                    onChange={() => setSelectedValue('default_radio')}
                />
            </Label>

            <Label>
                <Radio
                    name='radio'
                    value='checked_radio'
                    label='Checked Radio'
                    checked={selectedValue === 'checked_radio'}
                    onChange={() => setSelectedValue('checked_radio')}
                />
            </Label>

            <Label>
                <Radio name='radio' value='disabled_radio' label='Disabled Radio' disabled />
            </Label>
        </div>
    );
};

export default RadioPreview;
