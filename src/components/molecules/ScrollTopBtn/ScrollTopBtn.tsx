'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Separator, Text } from '@components/atoms';
import { CircleArrowUp } from 'lucide-react';

export const ScrollTopBtn = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    const animation: HTMLMotionProps<'div'> = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
        exit: { opacity: 0 }
    };

    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {scrollPosition > 150 && (
                <motion.div {...animation} className="relative w-full">
                    <Separator className="my-2" />

                    <button type="button" onClick={scrollTop} className="group flex cursor-pointer items-center gap-2">
                        <Text className="group-hover:text-title w-fit! transition-colors duration-200">
                            Scroll to top
                        </Text>

                        <CircleArrowUp className="text-text group-hover:text-title size-5 transition-colors duration-200" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
