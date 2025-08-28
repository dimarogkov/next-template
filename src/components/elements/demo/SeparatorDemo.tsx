import { Separator, Text, Title } from '@/src/components/ui';

const SeparatorDemo = () => {
    return (
        <div className='relative w-full'>
            <Title size='h3' className='mb-2.5 last:mb-0'>
                Separator Title
            </Title>

            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate dolorum vitae harum magni
                adipisci tempore ducimus sed nesciunt dignissimos fugit rem consequatur beatae numquam voluptatem,
                nostrum, ipsum temporibus esse.
            </Text>

            <Separator className='my-5' />

            <Text>An open-source UI component library.</Text>
        </div>
    );
};

export default SeparatorDemo;
