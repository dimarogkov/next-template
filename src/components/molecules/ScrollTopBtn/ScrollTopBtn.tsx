'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Separator, Text } from '@components/atoms';
import { CircleArrowUp } from 'lucide-react';

export default function ScrollTopBtn() {
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
        exit: { opacity: 0 },
    };

    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {scrollPosition > 100 && (
                <motion.div {...animation} className='relative w-full'>
                    <Separator className='my-1.5' />

                    <button type='button' onClick={scrollTop} className='group flex items-center gap-2'>
                        <Text className='!w-fit transition-colors duration-200 group-hover:text-title'>
                            Scroll to top
                        </Text>

                        <CircleArrowUp className='size-5 text-text transition-colors duration-200 group-hover:text-title' />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
