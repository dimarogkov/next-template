export const INPUT_USAGE_CODE = `<Input name='name' placeholder='Username' />`;

export const INPUT_CONTROLLED_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Input, Label } from '@/src/components/ui';

const InputControlled = () => {
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

export default InputControlled;`;

export const INPUT_PASSWORD_USAGE_CODE = `<InputPassword name='password' placeholder='Password' />`;

export const INPUT_PASSWORD_CONTROLLED_USAGE_CODE = `'use client';
import { useState } from 'react';
import { InputPassword, Label } from '@/src/components/ui';

const InputPasswordControlled = () => {
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

export default InputPasswordControlled;`;
