export const SELECT_USAGE_CODE = `import { Select } from '@components/atoms';

<Select>
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
import { Select } from '@components/atoms';

export default function SelectDemo() {
    const [value, setValue] = useState('');

    return (
        <Select value={value} onChange={({ target }) => setValue(target.value)}>
			<Select.Trigger placeholder='Select framework...' />
			<Select.Options>
				<Select.Option value='react'>React.js</Select.Option>
				<Select.Option value='vue'>Vue.js</Select.Option>
				<Select.Option value='angular'>Angular</Select.Option>
				<Select.Option value='svelte'>Svelte</Select.Option>
			</Select.Options>
		</Select>
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
