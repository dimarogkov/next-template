'use client';
import { useMain } from '@hooks';
import cn from 'classnames';

export const SidebarLayer = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useMain();

    return (
        <div
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
            className={cn('bg-bg/70 fixed top-0 left-0 z-20 h-full w-full transition-all duration-300', {
                'invisible opacity-0': !isSidebarOpen,
                'visible opacity-100': isSidebarOpen
            })}
        />
    );
};
