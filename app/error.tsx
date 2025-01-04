'use client';
import { FC } from 'react';
import { Btn, Title } from '@/src/components/ui';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error: FC<Props> = ({ error, reset = () => {} }) => {
    return (
        <section className='relative flex flex-col gap-5 w-full'>
            <Title>{error?.message}</Title>
            <Btn onClick={() => reset()}>Retry</Btn>
        </section>
    );
};

export default Error;
