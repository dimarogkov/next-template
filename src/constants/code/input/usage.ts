export const INPUT_USAGE_CODE = `import { Input } from '@components/atoms';

<Input name='name' placeholder='Username' />`;

export const INPUT_CONTROLLED_USAGE_CODE = `'use client';
import { useState } from 'react';
import { Input, Label } from '@components/atoms';

export default function InputControlled() {
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
}`;

export const INPUT_PASSWORD_USAGE_CODE = `import { InputPassword } from '@components/atoms';

<InputPassword name='password' placeholder='Password' />`;

export const INPUT_PASSWORD_CONTROLLED_USAGE_CODE = `'use client';
import { useState } from 'react';
import { InputPassword, Label } from '@components/atoms';

export default function InputPasswordControlled() {
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
}`;
