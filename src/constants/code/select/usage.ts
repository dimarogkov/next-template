export const SELECT_USAGE_CODE = `<Select>
	<Select.Trigger placeholder='Select framework...' />
	<Select.Options>
		<Select.Option value='react'>React.js</Select.Option>
		<Select.Option value='vue'>Vue.js</Select.Option>
		<Select.Option value='angular'>Angular</Select.Option>
		<Select.Option value='svelte'>Svelte</Select.Option>
	</Select.Options>
</Select>`;

export const SELECT_CONTROLLED_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Label, Select } from '@components/atoms';

const FRAMEWORKS = [
    { value: 'react', label: 'React.js' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
];

export default function SelectDemo() {
    const [value, setValue] = useState('');

    return (
        <div className='relative flex flex-col gap-2.5'>
            <Label>
                <Select value={value} onChange={({ target }) => setValue(target.value)}>
                    <Select.Trigger placeholder='Select framework...' />
                    <Select.Options>
                        {FRAMEWORKS.map(({ value, label }) => (
                            <Select.Option key={value} value={value}>
                                {label}
                            </Select.Option>
                        ))}
                    </Select.Options>
                </Select>
            </Label>
        </div>
    );
}`;

export const SELECT_ICON_USAGE_CODE = `import { Select } from '@components/atoms';
import { ChevronDown } from 'lucide-react';

<Select>
	<Select.Trigger placeholder='Select framework...' icon={ChevronDown} />
	<Select.Options>
		<Select.Option value='react'>React.js</Select.Option>
		<Select.Option value='vue'>Vue.js</Select.Option>
		<Select.Option value='angular'>Angular</Select.Option>
		<Select.Option value='svelte'>Svelte</Select.Option>
	</Select.Options>
</Select>`;

export const SELECT_MULTIPLE_USAGE_CODE = `import { Select } from '@components/atoms';

<Select multiple>
	<Select.Trigger placeholder='Select framework...' />
	<Select.Options>
		<Select.Option value='react'>React.js</Select.Option>
		<Select.Option value='vue'>Vue.js</Select.Option>
		<Select.Option value='angular'>Angular</Select.Option>
		<Select.Option value='svelte'>Svelte</Select.Option>
	</Select.Options>
</Select>`;
