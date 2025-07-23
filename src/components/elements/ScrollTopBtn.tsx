'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollTopBtn = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    const animation: HTMLMotionProps<'button'> = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { ease: [0.215, 0.61, 0.355, 1] } },
        exit: { opacity: 0, y: 20 },
        whileTap: { scale: 0.95 },
    };

    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {scrollPosition > 100 && (
                <motion.button
                    type='button'
                    {...animation}
                    onClick={scrollTop}
                    className='group fixed z-10 right-5 xl:right-6 bottom-5 xl:bottom-6 hidden lg:flex items-center justify-center size-10 rounded-md select-none bg-border will-change-transform'
                >
                    <ChevronUp className='size-6 text-text transition-colors duration-300 group-hover:text-title' />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollTopBtn;
