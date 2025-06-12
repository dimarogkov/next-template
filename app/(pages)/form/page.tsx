import { Metadata } from 'next';
import { EnumTitle } from '@/src/types/enums';
import { Form } from '@/src/components/elements';
import { Badge, Line, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Form Page',
};

const FormPage = () => {
    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <div className='flex flex-col gap-6 w-full'>
                        <Badge>
                            <Badge.Item>React Hook Form</Badge.Item>
                            <Badge.Item>Yup Validation</Badge.Item>
                        </Badge>

                        <Title titleType={EnumTitle.h2}>React Form</Title>
                    </div>

                    <Line />
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default FormPage;
