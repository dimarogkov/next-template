'use client';
import { useState } from 'react';
import { Checkbox, Label } from '@components/atoms';

export default function CheckboxDemo() {
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
}
