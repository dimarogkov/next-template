'use client';
import { useState } from 'react';
import { Checkbox, Label } from '@/src/components/ui';

const CheckboxDemo = () => {
    const [firstCheckbox, setFirstCheckbox] = useState(false);
    const [secondCheckbox, setSecondCheckbox] = useState(true);

    return (
        <div className='relative flex flex-col gap-2.5 w-full'>
            <Label>
                <Checkbox
                    label='Accept terms and conditions'
                    checked={firstCheckbox}
                    onChange={() => setFirstCheckbox(!firstCheckbox)}
                />
            </Label>

            <Label>
                <Checkbox
                    label='Accept terms and conditions'
                    checked={secondCheckbox}
                    onChange={() => setSecondCheckbox(!secondCheckbox)}
                />
            </Label>

            <Label>
                <Checkbox label='Accept terms and conditions' disabled />
            </Label>
        </div>
    );
};

export default CheckboxDemo;
