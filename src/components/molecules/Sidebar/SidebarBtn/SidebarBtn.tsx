'use client';
import { useMain } from '@hooks';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SidebarBtn() {
    const { isSidebarOpen, setIsSidebarOpen } = useMain();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <button
            type='button'
            onClick={toggleSidebar}
            className='sidebar-btn absolute -right-7 lg:-right-8 hidden md:flex xl:hidden items-center justify-center size-7 lg:size-8 rounded-r border border-border bg-bg'
        >
            {isSidebarOpen ? (
                <ChevronLeft className='size-5 text-text' />
            ) : (
                <ChevronRight className='size-5 text-text' />
            )}
        </button>
    );
}
