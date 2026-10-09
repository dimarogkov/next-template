export const ALERT_DEMO_CODE = `import { Alert } from '@components/atoms';
import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react';

export const AlertDemo = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <Alert icon={Info}>
        <Alert.Title>Heads up!</Alert.Title>
        <Alert.Description>You can add components to your app using the CLI.</Alert.Description>
      </Alert>

      <Alert icon={CircleCheck} variant="success">
        <Alert.Title>Success! Your changes have been saved</Alert.Title>
        <Alert.Description>This is an alert with icon, title and description.</Alert.Description>
      </Alert>

      <Alert icon={CircleAlert} variant="warning">
        <Alert.Title>Warning! Please review before continuing</Alert.Title>
        <Alert.Description>Some fields are missing recommended information.</Alert.Description>
      </Alert>

      <Alert icon={CircleX} variant="error">
        <Alert.Title>Error! Your changes could not be saved</Alert.Title>
        <Alert.Description>Something went wrong while processing your request.</Alert.Description>
      </Alert>
    </div>
  );
};`;
