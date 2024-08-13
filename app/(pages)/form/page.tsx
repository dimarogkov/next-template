import { Metadata } from 'next';
import Form from '@/src/components/elements/Form/Form';
import { BtnLink, Line, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Form Page',
};

const FormPage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full'>
                <BtnLink href='/' className='mb-5 last:mb-0'>
                    Back
                </BtnLink>

                <Title>React Hook Form</Title>
            </div>

            <Line />
            <Form />
        </section>
    );
};

export default FormPage;
