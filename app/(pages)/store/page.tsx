import { Metadata } from 'next';
import { BackLink, Breadcrumbs, StoreRedux, StoreZustand } from '@/src/components/elements';
import { Badge, Line, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Store Page',
};

const StorePage = () => {
    return (
        <section className='relative w-full'>
            <div className='flex flex-col gap-6 w-full'>
                <BackLink />
                <Breadcrumbs />

                <Badge>
                    <Badge.Item>Redux Store</Badge.Item>
                    <Badge.Item>Zustand Store</Badge.Item>
                </Badge>

                <Title>Redux & Zustand Store</Title>
            </div>

            <Line />

            <div className='flex flex-col gap-10 w-full'>
                <StoreRedux />
                <StoreZustand />
            </div>
        </section>
    );
};

export default StorePage;
