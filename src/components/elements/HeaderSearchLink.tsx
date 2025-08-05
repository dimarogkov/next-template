import { FC } from 'react';
import Link from 'next/link';
import { Text } from '@/src/components/ui';
import { MoveRight } from 'lucide-react';

type Props = {
    link: {
        label: string;
        name: string;
        href: string;
    };
};

const HeaderSearchLink: FC<Props> = ({ link }) => {
    const { label, name, href } = link;

    return (
        <Link
            href={href}
            className='flex items-center justify-between rounded-md py-1.5 px-3 transition-colors duration-300 hover:bg-border mb-2 last:mb-0'
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
