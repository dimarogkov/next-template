import AlertWrapper from './AlertWrapper';
import AlertTitle from './AlertTitle';
import AlertDescription from './AlertDescription';

const Alert = Object.assign(AlertWrapper, {
    Title: AlertTitle,
    Description: AlertDescription,
});

export default Alert;
