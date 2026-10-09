'use client';
import { useMain } from '@hooks';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SidebarBtn = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useMain();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <button
            type="button"
            aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            aria-expanded={isSidebarOpen}
            onClick={toggleSidebar}
            className="sidebar-btn border-border bg-bg absolute -right-12 hidden size-7 items-center justify-center rounded-r border md:flex lg:-right-13 lg:size-8 xl:hidden"
        >
            {isSidebarOpen ? (
                <ChevronLeft className="text-text size-5" />
            ) : (
                <ChevronRight className="text-text size-5" />
            )}
        </button>
    );
};
