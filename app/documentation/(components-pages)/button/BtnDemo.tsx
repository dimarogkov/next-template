'use client';
import { usePathname } from 'next/navigation';
import { Btn } from '@components/atoms';
import { User } from 'lucide-react';

export const BtnDemo = () => {
    const pathname = usePathname();

    return (
        <div className="relative flex w-full flex-wrap gap-2.5">
            <Btn>Default Button</Btn>
            <Btn variant="secondary">Secondary Button</Btn>
            <Btn variant="outline">Outline Button</Btn>
            <Btn variant="ghost">Ghost Button</Btn>
            <Btn href={pathname}>Link Button</Btn>

            <Btn>
                <User aria-hidden="true" className="size-5" />
                <span>Icon Button</span>
            </Btn>
        </div>
    );
};
