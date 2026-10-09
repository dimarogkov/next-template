'use client';
import { MutableRefObject, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { IComponentsSection } from '@interfaces/ComponentsSection';
import { ComponentsNavigationBtns } from '@components/organisms';
import { Text } from '@components/atoms';
import { ArrowUpRight } from 'lucide-react';
import cn from 'classnames';

type Props = {
    sectionsRef: MutableRefObject<Record<string, HTMLElement | null>>;
    sectionsArr: IComponentsSection[];
    codeLink?: string;
};

export const ComponentsNavigation = ({ sectionsRef, sectionsArr, codeLink }: Props) => {
    const [activeSection, setActiveSection] = useState('');
    const [hasScrolled, setHasScrolled] = useState(false);
    const { scrollY, scrollYProgress } = useScroll();
    const roundedProgress = useTransform(scrollYProgress, (value) => Math.round(value * 100));

    const findActiveSection = () => {
        for (const { id } of sectionsArr) {
            const el = sectionsRef.current[id];
            if (!el) continue;

            const { top, bottom } = el.getBoundingClientRect();
            const targetPoint = window.innerHeight / 3;

            if (top <= targetPoint && bottom >= targetPoint) {
                return id;
            }
        }

        return '';
    };

    useMotionValueEvent(scrollY, 'change', () => {
        const section = findActiveSection();
        section !== activeSection && setActiveSection(section);
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const scrolled = latest > 0;
        scrolled !== hasScrolled && setHasScrolled(scrolled);
    });

    const handleScroll = (id: string) => {
        const el = sectionsRef.current[id];
        el && el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <motion.nav
            aria-label="On this page"
            className="sticky top-31 hidden w-52 flex-col gap-2 overflow-hidden py-5 pl-2.5 xl:flex"
        >
            <div className="border-border rounded-md border">
                <div className="border-border relative flex items-center justify-between border-b px-2 py-1.5">
                    <Text className="text-text/70 w-fit!">On this Page</Text>

                    <Text
                        className={cn('text-title w-fit! text-sm! opacity-0 transition-opacity duration-200', {
                            'opacity-100': hasScrolled
                        })}
                    >
                        <motion.span>{roundedProgress}</motion.span>%
                    </Text>

                    <motion.div
                        id="scroll-indicator"
                        style={{ scaleX: scrollYProgress, originX: 0 }}
                        className="bg-blue absolute bottom-0 left-0 h-0.5 w-full"
                    />
                </div>

                <ul className="flex w-full flex-col gap-1.5 px-2 py-1.5">
                    {sectionsArr.map(({ id, text }) => (
                        <li key={id} className="relative">
                            {activeSection === id && (
                                <motion.span
                                    layoutId="active-indicator"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                                    className="bg-title absolute inset-y-0 -left-2 w-0.5 rounded-full"
                                />
                            )}

                            <Text>
                                <button
                                    onClick={() => handleScroll(id)}
                                    aria-current={activeSection === id ? 'location' : undefined}
                                    className={cn('hover:text-title cursor-pointer transition-colors duration-500', {
                                        'text-title': activeSection === id
                                    })}
                                >
                                    {text}
                                </button>
                            </Text>
                        </li>
                    ))}
                </ul>
            </div>

            {codeLink && (
                <Link
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-border flex h-10 w-full items-center justify-between rounded-md px-2.5 text-base transition-all duration-300 will-change-transform active:scale-[0.98]"
                >
                    <span className="group-hover:text-title transition-colors duration-300">View on GitHub</span>
                    <ArrowUpRight className="group-hover:text-title size-5 transition-all duration-300 will-change-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            )}

            <ComponentsNavigationBtns />
        </motion.nav>
    );
};
