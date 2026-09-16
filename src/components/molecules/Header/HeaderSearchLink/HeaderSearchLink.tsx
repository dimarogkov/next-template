'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Text } from '@components/atoms';
import { MoveRight } from 'lucide-react';
import cn from 'classnames';

type Props = {
    link: {
        label: string;
        name: string;
        href: string;
    };
};

export const HeaderSearchLink = ({ link }: Props) => {
    const { label, name, href } = link;
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={cn(
                'hover:bg-border mb-2 flex items-center justify-between rounded-md px-3 py-1.5 transition-colors duration-300 last:mb-0',
                {
                    'bg-border pointer-events-none opacity-70': pathname === href
                }
            )}
        >
            <div className="w-full">
                <Text size="large" className="text-title">
                    {name}
                </Text>

                <Text>{label}</Text>
            </div>

            <MoveRight className="size-6" />
        </Link>
    );
};
