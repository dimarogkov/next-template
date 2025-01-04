import { Metadata } from 'next';
import { BackLink, Breadcrumbs, Form } from '@/src/components/elements';
import { Badge, Line, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Form Page',
};

const FormPage = () => {
    return (
        <section className='relative w-full'>
            <div className='flex flex-col gap-6 w-full'>
                <BackLink />
                <Breadcrumbs />

                <Badge>
                    <Badge.Item>React Hook Form</Badge.Item>
                    <Badge.Item>Yup Validation</Badge.Item>
                </Badge>

                <Title>React Form</Title>
            </div>

            <Line />
            <Form />
        </section>
    );
};

export default FormPage;
