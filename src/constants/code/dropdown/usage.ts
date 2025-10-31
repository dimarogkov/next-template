export const DROPDOWN_USAGE_CODE = `import { Dropdown } from '@components/atoms';

<Dropdown>
	<Dropdown.Trigger>
		<Btn>Dropdown</Btn>
	</Dropdown.Trigger>
	<Dropdown.Content>
		<Dropdown.Menu>
			<Dropdown.Item>Profile</Dropdown.Item>
			<Dropdown.Item>Billing</Dropdown.Item>
			<Dropdown.Item>Settings</Dropdown.Item>
			<Dropdown.Item>Log out</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown.Content>
</Dropdown>`;

export const DROPDOWN_POSITION_USAGE_CODE = `import { Dropdown } from '@components/atoms';

{/* Bottom position by default */}
<Dropdown>
	<Dropdown.Trigger>
		<Btn>Dropdown</Btn>
	</Dropdown.Trigger>
	<Dropdown.Content position='bottom | left | right | top'>
		<Dropdown.Menu>
			<Dropdown.Item>Profile</Dropdown.Item>
			<Dropdown.Item>Billing</Dropdown.Item>
			<Dropdown.Item>Settings</Dropdown.Item>
			<Dropdown.Item>Log out</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown.Content>
</Dropdown>`;

export const DROPDOWN_ALIGN_USAGE_CODE = `import { Dropdown } from '@components/atoms';

{/* Start align by default */}
<Dropdown>
	<Dropdown.Trigger>
		<Btn>Dropdown</Btn>
	</Dropdown.Trigger>
	<Dropdown.Content align='start | end'>
		<Dropdown.Menu>
			<Dropdown.Item>Profile</Dropdown.Item>
			<Dropdown.Item>Billing</Dropdown.Item>
			<Dropdown.Item>Settings</Dropdown.Item>
			<Dropdown.Item>Log out</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown.Content>
</Dropdown>`;
