export const CHECKBOX_USAGE_CODE = `<Label>
	<Checkbox label='Accept terms and conditions' />
</Label>`;

export const CHECKBOX_CONTROLLING_USAGE_CODE = `import { useState } from 'react';
import { Checkbox, Label } from '../../ui';

export const CheckboxPreview = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<Label>
			<Checkbox
				label='Accept terms and conditions'
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
			/>
		</Label>
	);
};`;
