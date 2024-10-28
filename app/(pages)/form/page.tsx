import { Metadata } from 'next';
import { BackLink, Breadcrumbs, Form } from '@/src/components/elements';
import { Badge, Line, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Form Page',
};

const FormPage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full'>
                <BackLink className='mb-6 last:mb-0' />

                <Breadcrumbs className='mb-6 last:mb-0' />

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
