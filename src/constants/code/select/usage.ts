export const SELECT_USAGE_CODE = `<Select>
	<Select.Trigger placeholder='Select a fruit' />
	<Select.Options>
		<Select.Option value='apple'>Apple</Select.Option>
		<Select.Option value='banana'>Banana</Select.Option>
		<Select.Option value='blueberry'>Blueberry</Select.Option>
		<Select.Option value='pineapple'>Pineapple</Select.Option>
	</Select.Options>
</Select>`;

export const SELECT_CONTROLLED_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Label, Select } from '@components/atoms';

export default function SelectControlled() {
    const [value, setValue] = useState('');

    return (
        <Label>
            <Select>
                <Select.Trigger placeholder='Select a fruit' />
                <Select.Options>
                    <Select.Option value='apple'>Apple</Select.Option>
                    <Select.Option value='banana'>Banana</Select.Option>
                    <Select.Option value='blueberry'>Blueberry</Select.Option>
                    <Select.Option value='pineapple'>Pineapple</Select.Option>
                </Select.Options>
            </Select>
        </Label>
    );
}`;
