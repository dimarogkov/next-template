export const INPUT_USAGE_CODE = `<Label>
	<Input name='name' placeholder='Username' />
</Label>`;

export const INPUT_CONTROLLING_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Input, Label } from '@/src/components/ui';

const InputPreview = () => {
	const [value, setValue] = useState('');

	return (
		<Label>
			<Input
				name='name'
				placeholder='Username'
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
		</Label>
	);
};

export default InputPreview;`;

export const INPUT_PASSWORD_USAGE_CODE = `<Label>
	<InputPassword name='password' placeholder='Password' />
</Label>`;

export const INPUT_PASSWORD_CONTROLLING_USAGE_CODE = `'use client';
import { useState } from 'react';
import { InputPassword, Label } from '@/src/components/ui';

const InputPasswordPreview = () => {
	const [value, setValue] = useState('');

	return (
		<Label>
			<InputPassword
				name='password'
				placeholder='Password'
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
		</Label>
	);
};

export default InputPasswordPreview;`;
