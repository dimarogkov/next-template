export const CHECKBOX_USAGE_CODE = `<Label>
	<Checkbox label='Accept terms and conditions' />
</Label>`;

export const CHECKBOX_CONTROLLING_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Checkbox, Label } from '@/src/components/ui';

const CheckboxPreview = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Label>
            <Checkbox
                label='Accept terms and conditions'
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
            />
        </Label>
    );
};

export default CheckboxPreview;`;
