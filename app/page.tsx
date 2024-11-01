import { PATHS } from '@/src/variables/paths';
import { StoreRedux, StoreZustand } from '@/src/components/elements';
import { Badge, BtnLink, Line, Text, Title } from '@/src/components/ui';

const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <div className='flex gap-2 mb-5 last:mb-0'>
                    <Badge>Redux Store</Badge>
                    <Badge>Zustand Store</Badge>
                </div>

                <Title className='mb-2 last:mb-0'>Home Page</Title>
                <Text className='mb-5 last:mb-0'>This is Home Page.</Text>

                <div className='flex flex-wrap gap-2 w-full'>
                    <BtnLink href={PATHS.FORM}>Form Page</BtnLink>
                    <BtnLink href={PATHS.TODOS}>Todos Page</BtnLink>
                    <BtnLink href={PATHS.THEME}>Theme Page</BtnLink>
                </div>
            </div>

            <Line />

            <div className='w-full'>
                <StoreRedux className='mb-10 last:mb-0' />
                <StoreZustand />
            </div>
        </section>
    );
};

export default HomePage;
