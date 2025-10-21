'use client';
import { Text } from '@components/atoms';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

export default function SidebarBtn({ isOpen, toggleSidebar = () => {} }: Props) {
    return (
        <button
            type='button'
            onClick={toggleSidebar}
            className='sidebar-btn fixed md:absolute bottom-3 sm:bottom-4 md:bottom-auto left-[244px] md:left-auto md:-right-7 lg:-right-8 z-20 flex xl:hidden transition-colors duration-300 hover:text-title'
        >
            <span className='relative md:static flex items-center justify-center gap-0.5 w-fit h-8 md:size-7 lg:size-8 px-3 md:px-0 rounded-md md:rounded-none md:rounded-r md:border md:border-border bg-border md:bg-bg'>
                <Text className='md:hidden !w-fit'>Menu</Text>
                {isOpen ? <ChevronLeft className='size-5' /> : <ChevronRight className='size-5' />}
            </span>
        </button>
    );
}
