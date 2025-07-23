export const RADIO_USAGE_CODE = `<Label>
	<Radio name='radio' label='Radio' />
</Label>`;

export const RADIO_CONTROLLING_USAGE_CODE = `import { useState } from 'react';
import { Label, Radio } from '../../ui';

export const RadioPreview = () => {
	const [selectedValue, setSelectedValue] = useState('');

	return (
		<div className='relative flex flex-col gap-2.5 w-full'>
			<Label>
				<Radio
					name='radio'
					value='first_radio'
					label='First Radio'
					checked={selectedValue === 'first_radio'}
					onChange={() => setSelectedValue('first_radio')}
				/>
			</Label>

			<Label>
				<Radio
					name='radio'
					value='second_radio'
					label='Second Radio'
					checked={selectedValue === 'second_radio'}
					onChange={() => setSelectedValue('second_radio')}
				/>
			</Label>
		</div>
	);
};`;
