'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { DATA } from './data';
import { useMain } from '@hooks';
import { SidebarBtn, SidebarLayer, SidebarLink } from '@components/molecules';
import { Text } from '@components/atoms';
import cn from 'classnames';

export const Sidebar = () => {
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const { isSidebarOpen, setIsSidebarOpen } = useMain();

    const sidebarRef = useRef<HTMLDivElement>(null);
    const sidebarListRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();

    useEffect(() => {
        setIsSidebarOpen(false);
    }, [pathname, setIsSidebarOpen]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsSidebarOpen]);

    const { scrollYProgress } = useScroll({
        container: sidebarListRef
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setIsStart(latest === 0);
        setIsEnd(latest >= 0.99);
    });

    return (
        <>
            <SidebarLayer />

            <div
                ref={sidebarRef}
                className={cn(
                    'border-border bg-bg after:bg-bg fixed top-27 left-0 z-20 block h-[calc(100%-108px)] w-56 border-r transition-transform duration-300 lg:top-31 lg:h-auto xl:sticky xl:top-41 xl:border-none',
                    {
                        '-translate-x-56 xl:translate-x-0': !isSidebarOpen,
                        'translate-x-0': isSidebarOpen
                    }
                )}
            >
                <div className="relative h-full w-full px-5 py-5 md:py-10 lg:h-[calc(100svh-124px)] xl:h-[calc(100svh-204px)] xl:px-0 xl:py-0">
                    <SidebarBtn />

                    <motion.div
                        ref={sidebarListRef}
                        className={cn('sidebar h-full w-full overflow-auto', {
                            'sidebar-bottom-no-fade': isEnd,
                            'sidebar-top-no-fade': isStart
                        })}
                    >
                        <div className="flex w-full flex-col gap-3.5">
                            {DATA.map(({ title, links }) => (
                                <div key={title} className="w-full">
                                    <Text className="text-title mb-3 last:mb-0">{title}</Text>

                                    <ul className="border-border flex w-full flex-col gap-3.5 border-l pl-4">
                                        {links.map((link) => (
                                            <li key={link.name} className="w-full">
                                                <SidebarLink link={link} isActive={pathname === link.href} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};
