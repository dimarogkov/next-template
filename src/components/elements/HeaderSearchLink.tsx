'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Text } from '@/src/components/ui';
import { MoveRight } from 'lucide-react';
import cn from 'classnames';

type Props = {
    link: {
        label: string;
        name: string;
        href: string;
    };
};

const HeaderSearchLink: FC<Props> = ({ link }) => {
    const { label, name, href } = link;
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={cn(
                'flex items-center justify-between rounded-md py-1.5 px-3 transition-colors duration-300 hover:bg-border mb-2 last:mb-0',
                {
                    'bg-border opacity-70 pointer-events-none': pathname === href,
                }
            )}
        >
            <div className='w-full'>
                <Text size='large' className='text-white'>
                    {name}
                </Text>

                <Text>{label}</Text>
            </div>

            <MoveRight className='size-6' />
        </Link>
    );
};

export default HeaderSearchLink;
