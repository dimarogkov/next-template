export const DROPDOWN_DEMO_CODE = `'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Btn, Dropdown, Text } from '@/src/components/ui';

const DropdownDemo = () => {
    const pathname = usePathname();
    const linksArr = ['Profile', 'Billing', 'Settings', 'Log out'];

    return (
        <Dropdown className='w-full sm:w-fit'>
            <Dropdown.Trigger>
                <Btn variant='outline'>Dropdown</Btn>
            </Dropdown.Trigger>
            <Dropdown.Content className='sm:w-[200px]'>
                <ul className='flex flex-col gap-1 w-full'>
                    {linksArr.map((link) => (
                        <li key={link}>
                            <Text>
                                <Link
                                    href={pathname}
                                    className='block w-full rounded-md px-2 py-1 text-title transition-colors duration-300 hover:bg-border'
                                >
                                    {link}
                                </Link>
                            </Text>
                        </li>
                    ))}
                </ul>
            </Dropdown.Content>
        </Dropdown>
    );
};

export default DropdownDemo;`;
