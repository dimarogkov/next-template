import CardWrapper from './CardWrapper';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

export const Card = Object.assign(CardWrapper, {
    Head: CardHead,
    Body: CardBody,
    Footer: CardFooter,
});
