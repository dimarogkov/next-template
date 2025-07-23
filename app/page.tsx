import { DEV_ICONS, PATHS } from '@/src/variables';
import { DevIcon, HomeBg } from '@/src/components/elements';
import { Btn, Text, Title } from '@/src/components/ui';
import { ArrowUpRight } from 'lucide-react';

const HomePage = () => {
    const { MAIN } = PATHS.PAGES;

    return (
        <section className='relative w-full sm:h-[calc(100svh-64px)] min-h-[calc(100svh-64px)] lg:h-[calc(100svh-80px)] lg:min-h-[calc(100svh-80px)] py-7 md:py-10'>
            <HomeBg />

            <div className='container relative'>
                <div className='flex flex-col gap-5 w-full mb-8 last:mb-0'>
                    <Title size='h2' className='mb-1.5 last:mb-0'>
                        Build Faster with Next Template
                    </Title>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full'>
                        {DEV_ICONS.map((icon, text) => (
                            <DevIcon key={text} devIcon={icon} />
                        ))}
                    </div>

                    <Text size='large' className='text-title'>
                        A curated set of accessible, ready-to-use components for modern web apps. Designed to save you
                        time and help you create stunning UIs effortlessly.
                    </Text>

                    <div className='flex flex-wrap gap-2 w-full'>
                        <Btn isLink>
                            <Btn.Link href={MAIN.DOCUMENTATION}>Get Started</Btn.Link>
                        </Btn>

                        <Btn variant='outline' isLink>
                            <Btn.Link href='https://github.com/dimarogkov/next-template' target='_blank'>
                                <span>Git Repo</span>
                                <ArrowUpRight className='size-5' />
                            </Btn.Link>
                        </Btn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
