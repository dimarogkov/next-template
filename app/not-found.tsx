import { Metadata } from 'next';
import { PATHS } from '@/src/variables';
import { EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '@/src/components/ui';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
    title: '404',
};

const NotFoundPage = () => {
    return (
        <section className='relative flex items-center w-full h-[calc(100svh-104px)] lg:h-[calc(100svh-120px)] pb-16 lg:pb-20'>
            <div className='container'>
                <div className='w-full text-center'>
                    <Title titleType={EnumTitle.h2} className='mb-1 last:mb-0'>
                        Ooops! Page Not Found
                    </Title>

                    <Text className='mb-5 last:mb-0'>
                        This page doesn’t exist or was removed! We suggest you go back to home.
                    </Text>

                    <BtnLink href={PATHS.HOME} className='m-auto'>
                        <span>Go Home</span>
                        <ArrowUpRight className='size-5' />
                    </BtnLink>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;
