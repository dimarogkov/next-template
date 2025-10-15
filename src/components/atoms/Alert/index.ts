import AlertWrapper from './AlertWrapper';
import AlertTitle from './AlertTitle';
import AlertDescription from './AlertDescription';

export const Alert = Object.assign(AlertWrapper, {
    Title: AlertTitle,
    Description: AlertDescription,
});
