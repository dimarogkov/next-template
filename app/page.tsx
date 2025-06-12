import { DEV_ICONS } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { DevIcon } from '@/src/components/elements';
import { BtnLink, Text, Title } from '@/src/components/ui';
import { ArrowUpRight } from 'lucide-react';

const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <div className='flex flex-col gap-4 w-full mb-8 last:mb-0'>
                        <Title titleType={EnumTitle.h2}>Next Template</Title>

                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 w-full'>
                            {DEV_ICONS.map((icon, text) => (
                                <DevIcon key={text} devIcon={icon} />
                            ))}
                        </div>

                        <Text textType={EnumText.large}>
                            This is Next Template for development. Technolgies used: Next.js, TypeScript, Tailwind CSS,
                            Axios, React Query, React Hook Form, Yup, Frame Motion, Redux Toolkit, Zustand.
                        </Text>

                        <BtnLink href='https://github.com/dimarogkov/next-template' target='_blank'>
                            <span>Git Repo</span>
                            <ArrowUpRight className='size-5' />
                        </BtnLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
