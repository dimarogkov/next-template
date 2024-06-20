'use client';
import { Title } from '@/src/components/ui';

type Props = {
    error: Error;
};

const ErrorBoundary: React.FC<Props> = ({ error }) => {
    return (
        <section className='relative w-full'>
            <Title>{error.message}</Title>
        </section>
    );
};

export default ErrorBoundary;
