export const ALERT_USAGE_CODE = `import { Alert } from '@components/atoms';
import { Info } from 'lucide-react';

{/* Default variant by default */}
<Alert icon={Info} variant='default | success | warning | error'>
	<Alert.Title>Success! Your changes have been saved</Alert.Title>
	<Alert.Description>This is an alert with icon, title and description.</Alert.Description>
</Alert>`;
