export const BTN_DEMO_CODE = `'use client';
import { usePathname } from 'next/navigation';
import { Btn } from '@components/atoms';
import { User } from 'lucide-react';

export default function BtnDemo() {
    const pathname = usePathname();

    return (
        <div className='relative flex flex-wrap gap-2.5 w-full'>
            <Btn>Default Button</Btn>
            <Btn variant='secondary'>Secondary Button</Btn>
            <Btn variant='outline'>Outline Button</Btn>
            <Btn variant='ghost'>Ghost Button</Btn>

            <Btn isLink>
                <Btn.Link href={pathname}>Link Button</Btn.Link>
            </Btn>

            <Btn>
                <User className='size-5' />
                <span>Icon Button</span>
            </Btn>
        </div>
    );
}`;
