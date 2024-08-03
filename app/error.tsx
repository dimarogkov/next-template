'use client';
import { Btn, Title } from '@/src/components/ui';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error: React.FC<Props> = ({ error, reset = () => {} }) => {
    return (
        <section className='relative w-full'>
            <Title>{error?.message}</Title>
            <Btn onClick={() => reset()}>Retry</Btn>
        </section>
    );
};

export default Error;
