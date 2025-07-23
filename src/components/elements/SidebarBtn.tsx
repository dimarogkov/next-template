'use client';
import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

const SidebarBtn: FC<Props> = ({ isOpen, toggleSidebar = () => {} }) => {
    return (
        <button
            type='button'
            onClick={toggleSidebar}
            className='sidebar-btn absolute -right-7 lg:-right-8 flex xl:hidden items-center justify-center size-7 lg:size-8 rounded-r border border-border bg-bg'
        >
            {isOpen ? <ChevronLeft className='size-5 text-text' /> : <ChevronRight className='size-5 text-text' />}
        </button>
    );
};

export default SidebarBtn;
