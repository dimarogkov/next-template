'use client';
import { FC } from 'react';
import { Btn, Title } from '@/src/components/ui';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error: FC<Props> = ({ error, reset = () => {} }) => {
    return (
        <section className='relative flex items-center w-full h-[calc(100svh-120px)] md:h-[calc(100svh-144px)] lg:h-[calc(100svh-160px)] pb-16 lg:pb-20'>
            <div className='container'>
                <div className='w-full text-center'>
                    <Title size='h2' className='mb-5 last:mb-0'>
                        {error?.message}
                    </Title>

                    <Btn onClick={() => reset()} className='m-auto'>
                        Retry
                    </Btn>
                </div>
            </div>
        </section>
    );
};

export default Error;
