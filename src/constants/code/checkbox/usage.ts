export const CHECKBOX_USAGE_CODE = `import { Checkbox } from '@components/atoms';

<Checkbox label='Accept terms and conditions' />`;

export const CHECKBOX_CONTROLLED_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Checkbox, Label } from '@components/atoms';

export default function CheckboxControlled() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Label>
            <Checkbox
                label='Accept terms and conditions'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
        </Label>
    );
}`;
