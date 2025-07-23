'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { getLinks } from '@/src/helpers';
import { SidebarBtn, SidebarLink } from '@/src/components/elements';
import { Text } from '@/src/components/ui';
import cn from 'classnames';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const sidebarRef = useRef<HTMLElement>(null);
    const sidebarListRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();
    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        container: sidebarListRef,
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setIsStart(latest === 0);
        setIsEnd(latest >= 0.99);
    });

    const toggleSidebar = () => setIsOpen(!isOpen);

    const linksArr = [
        ...Object.values(componentsLinks),
        ...Object.values(dataFetchingLinks),
        ...Object.values(formValidationLinks),
        ...Object.values(storeLinks),
    ].map(({ href }) => href);

    const sidebarItems = [
        {
            title: 'Components',
            links: componentsLinks,
        },
        {
            title: 'Data Fetching',
            links: dataFetchingLinks,
        },
        {
            title: 'Form Validation',
            links: formValidationLinks,
        },
        {
            title: 'Store',
            links: storeLinks,
        },
    ];

    return (
        linksArr.includes(pathname) && (
            <section
                ref={sidebarRef}
                className={cn(
                    'fixed z-10 left-0 top-[108px] lg:top-[124px] block w-52 border-r xl:border-none border-border bg-bg transition-transform duration-300 after:bg-bg',
                    {
                        '-translate-x-52 xl:translate-x-0': !isOpen,
                        'translate-x-0': isOpen,
                    }
                )}
            >
                <div className='relative w-full h-[calc(100svh-108px)] lg:h-[calc(100svh-124px)] px-5 py-7 md:py-10'>
                    <SidebarBtn isOpen={isOpen} toggleSidebar={toggleSidebar} />

                    <motion.div
                        ref={sidebarListRef}
                        className={cn('sidebar w-full h-full overflow-auto scroll-with-none', {
                            'sidebar-bottom-no-fade': isEnd,
                            'sidebar-top-no-fade': isStart,
                        })}
                    >
                        <div className='flex flex-col gap-3.5 w-full'>
                            {sidebarItems.map(({ title, links }) => (
                                <div key={title} className='w-full'>
                                    <Text className='text-title mb-3 last:mb-0'>{title}</Text>

                                    <ul className='flex flex-col gap-3.5 w-full pl-4 border-l border-border'>
                                        {links.map((link) => (
                                            <li key={link.name} className='w-full'>
                                                <SidebarLink link={link} isActive={pathname === link.href} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        )
    );
};

export default Sidebar;
