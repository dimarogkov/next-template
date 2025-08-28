export const CARD_DEMO_CODE = `import Image from 'next/image';
import { Btn, Card, Input, Label, Text, Title } from '@/src/components/ui';

const CardDemo = () => {
    const imgSrc =
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

    return (
        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 w-full'>
            <Card>
                <Card.Head className='h-0 pb-[60%] bg-text'>
                    <Image
                        src={imgSrc}
                        alt='Living Room Sofa'
                        loading='lazy'
                        className='absolute top-0 left-0 w-full h-full object-cover object-center'
                        sizes='100%'
                        fill
                    />
                </Card.Head>
                <Card.Body className='flex flex-col gap-2 p-3 md:p-4'>
                    <Title size='h4'>Living Room Sofa</Title>
                    <Text>This sofa is perfect for modern tropical spaces, baroque inspired spaces.</Text>
                    <Title size='h3'>$450</Title>
                </Card.Body>
                <Card.Footer className='flex flex-wrap gap-3 sm:gap-1 p-3 md:p-4'>
                    <Btn>Buy now</Btn>
                    <Btn variant='outline'>Add to cart</Btn>
                </Card.Footer>
            </Card>

            <Card className='flex flex-col gap-5 md:gap-4 p-3 md:p-4'>
                <Card.Head className='flex flex-col gap-2'>
                    <Title size='h4'>Sign up</Title>
                    <Text>Fill in the form below to create an account.</Text>
                </Card.Head>
                <Card.Body className='flex flex-col h-full'>
                    <form className='flex flex-col grow gap-3 md:gap-4 w-full'>
                        <Label className='flex flex-col gap-2'>
                            <Text className='text-title'>Email</Text>
                            <Input name='email' type='email' placeholder='m@example.com' required />
                        </Label>

                        <Label className='flex flex-col gap-1'>
                            <Text className='text-title'>Password</Text>
                            <Input name='password' type='password' required />
                        </Label>
                    </form>
                </Card.Body>
                <Card.Footer className='flex flex-wrap justify-end gap-3 sm:gap-1'>
                    <Btn variant='outline'>Cancel</Btn>
                    <Btn>Sign in</Btn>
                </Card.Footer>
            </Card>

            <Card className='md:col-span-2 p-3 md:p-4'>
                <Card.Body className='flex flex-col gap-2'>
                    <Title size='h4'>Card Title</Title>
                    <Text>This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Card.Body>
            </Card>

            <Card className='grid grid-cols-1 sm:grid-cols-[40%,auto] items-end md:col-span-2'>
                <Card.Head className='sm:row-span-2 h-0 pb-[60%] sm:pb-[80%] bg-text'>
                    <Image
                        src={imgSrc}
                        alt='Living Room Sofa'
                        loading='lazy'
                        className='absolute top-0 left-0 w-full h-full object-cover object-center'
                        sizes='100%'
                        fill
                    />
                </Card.Head>
                <Card.Body className='flex flex-col gap-2 h-full p-3 md:p-4'>
                    <Title size='h4'>Living Room Sofa</Title>
                    <Text>This sofa is perfect for modern tropical spaces, baroque inspired spaces.</Text>
                </Card.Body>
                <Card.Footer className='flex flex-wrap gap-3 sm:gap-1 p-3 md:p-4'>
                    <Btn>Buy now</Btn>
                    <Btn variant='outline'>Add to cart</Btn>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CardDemo;`;
