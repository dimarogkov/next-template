import { Metadata } from 'next';
import { Form } from '@/src/components/elements';
import { Badge, BtnLink, Line, Title } from '@/src/components/ui';

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

                <div className='flex gap-2 mb-5 last:mb-0'>
                    <Badge>React Hook Form</Badge>
                    <Badge>Yup Validation</Badge>
                </div>

                <Title>React Form</Title>
            </div>

            <Line />
            <Form />
        </section>
    );
};

export default FormPage;
