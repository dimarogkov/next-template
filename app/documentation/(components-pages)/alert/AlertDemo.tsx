import { Alert } from '@components/atoms';
import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react';

export const AlertDemo = () => {
    return (
        <div className="flex w-full flex-col gap-4">
            <Alert icon={Info}>
                <Alert.Title>Success! Your changes have been saved</Alert.Title>
                <Alert.Description>This is an alert with icon, title and description.</Alert.Description>
            </Alert>

            <Alert icon={CircleCheck} variant="success">
                <Alert.Title>Success! Your changes have been saved</Alert.Title>
                <Alert.Description>This is an alert with icon, title and description.</Alert.Description>
            </Alert>

            <Alert icon={CircleAlert} variant="warning">
                <Alert.Title>Success! Your changes have been saved</Alert.Title>
                <Alert.Description>This is an alert with icon, title and description.</Alert.Description>
            </Alert>

            <Alert icon={CircleX} variant="error">
                <Alert.Title>Success! Your changes have been saved</Alert.Title>
                <Alert.Description>This is an alert with icon, title and description.</Alert.Description>
            </Alert>
        </div>
    );
};
