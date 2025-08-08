export const CHECKBOX_USAGE_CODE = `<Checkbox label='Accept terms and conditions' />`;

export const CHECKBOX_CONTROLLING_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Checkbox, Label } from '@/src/components/ui';

const CheckboxPreview = () => {
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
};

export default CheckboxPreview;`;
