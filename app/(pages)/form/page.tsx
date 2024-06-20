import { Metadata } from 'next';
import Form from '@/src/components/elements/Form/Form';

export const metadata: Metadata = {
    title: 'Form Page',
};

const FormPage = () => {
    return <Form />;
};

export default FormPage;
