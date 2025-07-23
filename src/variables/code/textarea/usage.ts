export const TEXTAREA_USAGE_CODE = `<Label>
	<Textarea placeholder='Type your message here.' />
</Label>`;

export const TEXTAREA_CONTROLLING_USAGE_CODE = `import { useState } from 'react';
import { Label, Textarea } from '../../ui';

export const TextareaPreview = () => {
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
};`;
