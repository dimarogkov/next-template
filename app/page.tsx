import { PATHS } from '@/src/variables';
import { HomeBg, HomeSlider } from '@/src/components/elements';
import { Btn, Text, Title } from '@/src/components/ui';
import { ArrowUpRight } from 'lucide-react';

const HomePage = () => {
    const { MAIN } = PATHS.PAGES;

    return (
        <section className='relative flex items-center justify-center w-full sm:h-[calc(100svh-64px)] min-h-[calc(100svh-64px)] lg:h-[calc(100svh-80px)] lg:min-h-[calc(100svh-80px)] pb-16 lg:pb-20'>
            <HomeBg />

            <div className='relative container md:w-[800px]'>
                <div className='flex flex-col items-center w-full text-center'>
                    <Title className='mb-3 last:mb-0'>Build Faster with Next Template</Title>

                    <HomeSlider className='mb-3 last:mb-0' />

                    <Text size='large' className='mb-7 last:mb-0'>
                        A curated set of accessible, ready-to-use components for modern web apps. Designed to save you
                        time and help you create stunning UIs effortlessly.
                    </Text>

                    <div className='flex flex-wrap justify-center gap-2 w-full'>
                        <Btn isLink>
                            <Btn.Link href={MAIN.DOCUMENTATION}>Get Started</Btn.Link>
                        </Btn>

                        <Btn variant='outline' isLink>
                            <Btn.Link href='https://github.com/dimarogkov/react-template' target='_blank'>
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
