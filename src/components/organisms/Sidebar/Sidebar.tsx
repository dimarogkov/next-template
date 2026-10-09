'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEscapeKey, useFocusRestore, useFocusTrap, useMain } from '@hooks';
import { SidebarBtn, SidebarLayer, SidebarLink } from '@components/molecules';
import { Text } from '@components/atoms';
import { DATA } from './data';
import cn from 'classnames';

export const Sidebar = () => {
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const { isSidebarOpen, setIsSidebarOpen } = useMain();

    const sidebarRef = useRef<HTMLElement>(null);
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

    const closeSidebar = useCallback(() => setIsSidebarOpen(false), [setIsSidebarOpen]);

    useFocusRestore(sidebarRef, isSidebarOpen);
    useEscapeKey(closeSidebar, isSidebarOpen);
    useFocusTrap(sidebarRef, isSidebarOpen);

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

            <nav
                ref={sidebarRef}
                tabIndex={-1}
                aria-label="Documentation navigation"
                className={cn(
                    'border-border bg-bg fixed top-27 left-0 z-20 block h-[calc(100svh-108px)] w-60 border-r p-5 outline-hidden transition-transform duration-300 lg:top-31 lg:h-[calc(100svh-124px)] xl:sticky xl:top-31 xl:w-52 xl:border-none xl:pl-0',
                    {
                        '-translate-x-60 xl:translate-x-0': !isSidebarOpen,
                        'translate-x-0': isSidebarOpen
                    }
                )}
            >
                <div className="relative h-full w-full">
                    <SidebarBtn />

                    <motion.div
                        ref={sidebarListRef}
                        className={cn('sidebar h-full w-full overflow-auto', {
                            'sidebar-bottom-no-fade': isEnd,
                            'sidebar-top-no-fade': isStart
                        })}
                    >
                        <div className="flex w-full flex-col gap-5">
                            {DATA.map(({ title, links }) => (
                                <div key={title} className="w-full">
                                    <Text className="text-title mb-2 font-medium last:mb-0">{title}</Text>

                                    <ul className="flex w-full flex-col gap-1">
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
            </nav>
        </>
    );
};
