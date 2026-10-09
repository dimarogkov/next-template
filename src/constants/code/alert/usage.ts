export const ALERT_USAGE_CODE = `import { Alert } from '@components/atoms';
import { Info } from 'lucide-react';

<Alert icon={Info} variant='default | success | warning | error'>
  <Alert.Title>Success! Your changes have been saved</Alert.Title>
  <Alert.Description>This is an alert with icon, title and description.</Alert.Description>
</Alert>`;

export const ALERT_HEADING_SIZE_USAGE_CODE = `<Alert.Title headingSize='h1 | h2 | h3 | h4 | h5 | h6'>
  Success! Your changes have been saved
</Alert.Title>`;
