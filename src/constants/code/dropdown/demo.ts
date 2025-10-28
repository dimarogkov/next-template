export const DROPDOWN_DEMO_CODE = `'use client';
import { Btn, Dropdown } from '@components/atoms';

export default function DropdownDemo() {
    return (
        <Dropdown className='w-full sm:w-fit'>
            <Dropdown.Trigger>
                <Btn variant='outline'>Dropdown</Btn>
            </Dropdown.Trigger>
            <Dropdown.Content className='sm:w-[200px]'>
                <Dropdown.Menu>
                    <Dropdown.Label>My Account</Dropdown.Label>
                    <Dropdown.Separator />
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Billing</Dropdown.Item>

                    <Dropdown.SubMenu>
                        <Dropdown.SubTrigger>Team</Dropdown.SubTrigger>
                        <Dropdown.SubContent>
                            <Dropdown.Menu>
                                <Dropdown.Item>Invite Users</Dropdown.Item>
                                <Dropdown.Item>New Team</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.SubContent>
                    </Dropdown.SubMenu>

                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Separator />
                    <Dropdown.Item>Log out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Content>
        </Dropdown>
    );
}`;
