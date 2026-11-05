export const AVATAR_USAGE_CODE = `import { Avatar } from '@components/atoms';

<Avatar type='circle | square'>
  <Avatar.Img src='/user.png' alt='User avatar' />
</Avatar>`;

export const AVATAR_FALLBACK_USAGE_CODE = `<Avatar>
  <Avatar.Img src='/broken.png' alt='Jane Doe' fallback='JD' />
</Avatar>`;

export const AVATAR_LINK_USAGE_CODE = `<Avatar>
  <Avatar.Link href='/user'>
    <Avatar.Img src='/user.png' alt='User avatar' hasHover />
  </Avatar.Link>
</Avatar>`;

export const AVATAR_GROUP_USAGE_CODE = `<AvatarGroup visibleCount={3}>
  <Avatar>
    <Avatar.Link href='/user'>
      <Avatar.Img src='/user.png' alt='User avatar' hasHover />
    </Avatar.Link>
  </Avatar>
  <Avatar>...</Avatar>
  <Avatar>...</Avatar>
  <Avatar>...</Avatar>
</AvatarGroup>`;
