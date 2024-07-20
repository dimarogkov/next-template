import { Metadata } from 'next';
import Form from '@/src/components/elements/Form/Form';
import { BtnLink, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Form Page',
};

const FormPage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <BtnLink href='/' className='mb-5 last:mb-0'>
                    Back
                </BtnLink>

                <Title>React Hook Form</Title>
            </div>

            <Form />
        </section>
    );
};

export default FormPage;
