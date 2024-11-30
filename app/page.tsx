import { PATHS } from '@/src/variables/paths';
import { BtnLink, Text, Title } from '@/src/components/ui';

const HomePage = () => {
    return (
        <section className='relative w-full'>
            <Title className='mb-2 last:mb-0'>Home Page</Title>
            <Text className='mb-5 last:mb-0'>This is Home Page.</Text>

            <div className='flex flex-wrap gap-2 w-full'>
                <BtnLink href={PATHS.UI}>UI Page</BtnLink>
                <BtnLink href={PATHS.STORE}>Store Page</BtnLink>
                <BtnLink href={PATHS.FORM}>Form Page</BtnLink>
                <BtnLink href={PATHS.TODOS}>Todos Page</BtnLink>
            </div>
        </section>
    );
};

export default HomePage;
