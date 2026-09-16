export const CHECKBOX_DEMO_CODE = `'use client';
import { useState } from 'react';
import { Checkbox, Label } from '@components/atoms';

export const CheckboxDemo = () => {
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(true);

  return (
    <div className="relative flex w-full flex-col gap-2.5">
      <Label>
        <Checkbox
          label="Accept terms and conditions"
          checked={firstCheckbox}
          onChange={() => setFirstCheckbox(!firstCheckbox)}
        />
      </Label>

      <Label>
        <Checkbox
          label="Accept terms and conditions"
          checked={secondCheckbox}
          onChange={() => setSecondCheckbox(!secondCheckbox)}
        />
      </Label>

      <Label>
        <Checkbox label="Accept terms and conditions" disabled />
      </Label>
    </div>
  );
};`;
