'use client';
import { useState } from 'react';
import { Checkbox } from '@components/atoms';

export const CheckboxDemo = () => {
    const [firstCheckbox, setFirstCheckbox] = useState(false);
    const [secondCheckbox, setSecondCheckbox] = useState(true);

    return (
        <div className="relative flex w-full flex-col gap-2.5">
            <Checkbox
                label="Accept terms and conditions"
                checked={firstCheckbox}
                onChange={() => setFirstCheckbox(!firstCheckbox)}
            />

            <Checkbox
                label="Subscribe to our newsletter"
                checked={secondCheckbox}
                onChange={() => setSecondCheckbox(!secondCheckbox)}
            />

            <Checkbox label="Unavailable option" disabled />
        </div>
    );
};
