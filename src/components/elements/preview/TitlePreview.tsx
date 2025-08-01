import { Title } from '@/src/components/ui';

const TitlePreview = () => {
    return (
        <div className='relative flex flex-col gap-1.5 w-full'>
            <Title>Title H1</Title>
            <Title size='h2'>Title H2</Title>
            <Title size='h3'>Title H3</Title>
            <Title size='h4'>Title H4</Title>
        </div>
    );
};

export default TitlePreview;
