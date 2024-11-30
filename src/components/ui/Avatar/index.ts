import AvatarImg from './AvatarImg';
import AvatarLink from './AvatarLink';
import AvatarWrapper from './AvatarWrapper';

export const Avatar = Object.assign(AvatarWrapper, {
    Link: AvatarLink,
    Img: AvatarImg,
});

export default Avatar;
