import { Alert } from '@/src/components/ui';
import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react';

const AlertPreview = () => {
    return (
        <div className='flex flex-col gap-4 w-full'>
            <Alert icon={Info}>
                <Alert.Title>Success! Your changes have been saved</Alert.Title>
                <Alert.Description>This is an alert with icon, title and description.</Alert.Description>
            </Alert>

            <Alert icon={CircleCheck} variant='success'>
                <Alert.Title>Success! Your changes have been saved</Alert.Title>
                <Alert.Description>This is an alert with icon, title and description.</Alert.Description>
            </Alert>

            <Alert icon={CircleAlert} variant='warning'>
                <Alert.Title>Success! Your changes have been saved</Alert.Title>
                <Alert.Description>This is an alert with icon, title and description.</Alert.Description>
            </Alert>

            <Alert icon={CircleX} variant='error'>
                <Alert.Title>Success! Your changes have been saved</Alert.Title>
                <Alert.Description>This is an alert with icon, title and description.</Alert.Description>
            </Alert>
        </div>
    );
};

export default AlertPreview;
