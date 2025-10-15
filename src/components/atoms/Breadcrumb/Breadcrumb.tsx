'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { convertUrlToString } from '@utils';
import { ChevronRight } from 'lucide-react';

interface Props extends HTMLAttributes<HTMLUListElement>, RefAttributes<HTMLUListElement> {
    className?: string;
}

const Breadcrumb = forwardRef<HTMLUListElement, Props>(({ className = '', ...props }, ref) => {
    const pathname = usePathname();

    const links = pathname.split('/').map((link) => ({
        id: crypto.randomUUID(),
        href: `/${link}`,
        name: link ? convertUrlToString(link) : 'Home',
    }));

    return (
        <ul ref={ref} {...props} className={`flex items-center gap-1 w-full h-full ${className}`}>
            {links.map(({ id, href, name }, index) => (
                <li key={id}>
                    {links.length - 1 !== index ? (
                        <Link href={href} className='flex items-center line-clamp-1 hover:underline'>
                            <span className='line-clamp-1'>{name}</span>
                            <ChevronRight className='size-5 min-w-5 stroke-1 text-text' />
                        </Link>
                    ) : (
                        <span className='line-clamp-1 text-title'>{name}</span>
                    )}
                </li>
            ))}
        </ul>
    );
});

Breadcrumb.displayName = 'Breadcrumb';
export default Breadcrumb;
