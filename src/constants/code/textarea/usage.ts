export const TEXTAREA_USAGE_CODE = `import { Textarea } from '@components/atoms';

<Textarea placeholder='Type your message here.' />`;

export const TEXTAREA_CONTROLLED_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Label, Textarea } from '@components/atoms';

export default function TextareaControlled() {
    const [value, setValue] = useState('');

    return (
        <Label>
            <Textarea
                placeholder='Type your message here.'
                value={value}
                onChange={({ target }) => setValue(target.value)}
            />
        </Label>
    );
}`;
