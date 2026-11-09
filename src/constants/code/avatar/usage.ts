export const AVATAR_USAGE_CODE = `import { Avatar } from '@components/atoms';

<Avatar type='circle | square'>
  <Avatar.Img src='/user.png' alt='Jane Doe' />
</Avatar>`;

export const AVATAR_FALLBACK_USAGE_CODE = `<Avatar>
  <Avatar.Img src='/user.png' alt='Jane Doe' fallback='JD' />
</Avatar>`;

export const AVATAR_LINK_USAGE_CODE = `<Avatar>
  <Avatar.Link href='/user'>
    <Avatar.Img src='/user.png' alt='Jane Doe' />
  </Avatar.Link>
</Avatar>`;

export const AVATAR_GROUP_USAGE_CODE = `<AvatarGroup visibleCount={3}>
  <Avatar>
    <Avatar.Link href='/user'>
      <Avatar.Img src='/user.png' alt='Jane Doe' />
    </Avatar.Link>
  </Avatar>
  <Avatar>...</Avatar>
  <Avatar>...</Avatar>
  <Avatar>...</Avatar>
</AvatarGroup>`;

export const AVATAR_RING_USAGE_CODE = `<Avatar hasRing>
  <Avatar.Img src='/user.png' alt='Jane Doe' />
</Avatar>`;
