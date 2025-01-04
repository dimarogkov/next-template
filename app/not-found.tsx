import { Metadata } from 'next';
import { PATHS } from '@/src/variables/paths';
import { BtnLink, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: '404',
};

const NotFoundPage = () => {
    return (
        <section className='relative flex flex-col gap-5 w-full'>
            <Title>Page not Found | 404</Title>
            <BtnLink href={PATHS.HOME}>Go Home</BtnLink>
        </section>
    );
};

export default NotFoundPage;
