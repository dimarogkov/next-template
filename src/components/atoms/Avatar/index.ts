import AvatarGroup from './AvatarGroup';
import AvatarWrapper from './AvatarWrapper';
import AvatarLink from './AvatarLink';
import AvatarImg from './AvatarImg';

export const Avatar = Object.assign(AvatarWrapper, {
    Link: AvatarLink,
    Img: AvatarImg,
});

export { AvatarGroup };
