'use client';
import { FC, MutableRefObject, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { IComponentsSection } from '@/src/types/interfaces/ComponentsSection';
import { Text } from '@/src/components/ui';
import cn from 'classnames';

type Props = {
    sectionsRef: MutableRefObject<Record<string, HTMLElement | null>>;
    sectionsArr: IComponentsSection[];
};

const ComponentsNavigation: FC<Props> = ({ sectionsRef, sectionsArr }) => {
    const [activeSection, setActiveSection] = useState('');
    const { scrollY } = useScroll();

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

    const handleScroll = (id: string) => {
        const el = sectionsRef.current[id];
        el && el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <motion.section className='sticky top-[164px] hidden xl:block w-52 pl-5'>
            <div className='w-full'>
                <Text className='text-text/70 mb-2 last:mb-0'>On this Page</Text>

                <ul className='flex flex-col gap-1.5 w-full'>
                    {sectionsArr.map(({ id, text }) => (
                        <li key={id}>
                            <Text>
                                <button
                                    onClick={() => handleScroll(id)}
                                    className={cn('transition-colors duration-200 hover:text-title', {
                                        'text-title': activeSection === id,
                                    })}
                                >
                                    {text}
                                </button>
                            </Text>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.section>
    );
};

export default ComponentsNavigation;
