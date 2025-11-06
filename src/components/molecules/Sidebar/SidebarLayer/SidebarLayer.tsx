'use client';
import { useMain } from '@hooks';
import cn from 'classnames';

export default function SidebarLayer() {
    const { isSidebarOpen, setIsSidebarOpen } = useMain();

    return (
        <div
            onClick={() => setIsSidebarOpen(false)}
            className={cn('fixed z-20 top-0 left-0 w-full h-full bg-bg/70 transition-all duration-300', {
                'opacity-0 invisible': !isSidebarOpen,
                'opacity-100 visible': isSidebarOpen,
            })}
        />
    );
}
