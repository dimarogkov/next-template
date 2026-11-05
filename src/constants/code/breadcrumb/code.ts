/* eslint-disable no-useless-escape */
export const BREADCRUMB_UTILS_CODE = `export const convertUrlToString = (url: string) => {
  const decoded = decodeURIComponent(url);
  const normalized = decoded.replace(/[_/]/g, ' ');

  return normalized
    .split(/[\\s-]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};`;

export const BREADCRUMB_CODE = `'use client';
import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { convertUrlToString } from '@utils';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLOListElement>, RefAttributes<HTMLOListElement> {
  className?: string;
}

export const Breadcrumb = forwardRef<HTMLOListElement, Props>(({ className = '', ...props }, ref) => {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);

  const links = [
    { href: '/', name: 'Home' },
    ...segments.map((segment, index) => ({
      href: \`/\${segments.slice(0, index + 1).join('/')}\`,
      name: convertUrlToString(segment)
    }))
  ];

  return (
    <nav aria-label="Breadcrumb" className="h-full w-full">
      <ol ref={ref} {...props} className={cn('relative flex h-full w-full items-center gap-1', className)}>
        {links.map(({ href, name }, index) => (
          <li key={href}>
            {links.length - 1 !== index ? (
              <Link href={href} className="line-clamp-1 flex items-center gap-1 hover:underline">
                <span className="line-clamp-1">{name}</span>
                <ChevronRight aria-hidden="true" className="text-text size-5 min-w-5 stroke-1" />
              </Link>
            ) : (
              <span aria-current="page" className="text-title line-clamp-1">
                {name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';`;
