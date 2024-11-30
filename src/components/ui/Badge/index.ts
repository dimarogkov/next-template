import BadgeItem from './BadgeItem';
import BadgeWrapper from './BadgeWrapper';

const Badge = Object.assign(BadgeWrapper, {
    Item: BadgeItem,
});

export default Badge;
