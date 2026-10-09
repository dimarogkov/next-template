'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, HTMLMotionProps, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { usePrevNextComponentPath } from '@hooks';
import { Text } from '@components/atoms';
import { ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';

export const ComponentsNavigationBtns = () => {
    const [isVisible, setIsVisible] = useState(false);
    const links = usePrevNextComponentPath();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const visible = latest > 150;
        visible !== isVisible && setIsVisible(visible);
    });

    const animation: HTMLMotionProps<'div'> = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
        exit: { opacity: 0 }
    };

    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div {...animation} className="relative flex w-full flex-col gap-2">
                    <button
                        type="button"
                        onClick={scrollTop}
                        className="group border-border hover:bg-grey flex h-10 w-full cursor-pointer items-center justify-between gap-2 rounded-md border px-2.5 transition-all duration-300 will-change-transform active:scale-[0.98]"
                    >
                        <Text className="group-hover:text-title w-fit! leading-5! transition-colors duration-300">
                            Scroll to top
                        </Text>

                        <ChevronUp className="text-text group-hover:text-title size-5 transition-all duration-300 will-change-transform group-hover:-translate-y-0.5" />
                    </button>

                    <div className="flex gap-2">
                        {links.map(({ href }, index) => (
                            <Link
                                key={href}
                                href={href}
                                className="group border-border hover:bg-grey flex h-10 w-full items-center justify-center gap-0.5 rounded-md border px-2.5 text-base transition-all duration-300 will-change-transform active:scale-[0.98]"
                            >
                                {index === 0 ? (
                                    <>
                                        <ChevronLeft className="text-text group-hover:text-title size-5 transition-all duration-300 will-change-transform group-hover:-translate-x-0.5" />

                                        <Text className="group-hover:text-title w-fit! leading-5! transition-colors duration-300">
                                            Prev
                                        </Text>
                                    </>
                                ) : (
                                    <>
                                        <Text className="group-hover:text-title w-fit! leading-5! transition-colors duration-300">
                                            Next
                                        </Text>

                                        <ChevronRight className="text-text group-hover:text-title size-5 transition-all duration-300 will-change-transform group-hover:translate-x-0.5" />
                                    </>
                                )}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
