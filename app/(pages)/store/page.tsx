import { Metadata } from 'next';
import { BackLink, Breadcrumbs, StoreRedux, StoreZustand } from '@/src/components/elements';
import { Badge, Line, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Store Page',
};

const StorePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full'>
                <BackLink className='mb-6 last:mb-0' />

                <Breadcrumbs className='mb-6 last:mb-0' />

                <Badge className='mb-6 last:mb-0'>
                    <Badge.Item>Redux Store</Badge.Item>
                    <Badge.Item>Zustand Store</Badge.Item>
                </Badge>

                <Title>Redux & Zustand Store</Title>
            </div>

            <Line />

            <div className='w-full mb-10 last:mb-0'>
                <StoreRedux className='mb-10 last:mb-0' />
                <StoreZustand />
            </div>
        </section>
    );
};

export default StorePage;
