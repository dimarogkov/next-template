export const AVATAR_USAGE_CODE = `{/* Circle type by default */}
<Avatar type='circle | square'>
	<Avatar.Img src='/user.png' />
</Avatar>

{/* Online Avatar */}
<Avatar isOnline>
	<Avatar.Img src='/user.png' />
</Avatar>`;

export const AVATAR_LINK_USAGE_CODE = `<Avatar>
	<Avatar.Link href='/user'>
		<Avatar.Img src='/user.png' hasHover />
	</Avatar.Link>
</Avatar>`;

export const AVATAR_GROUP_USAGE_CODE = `<AvatarGroup visibleCount={3}>
	<Avatar>
		<Avatar.Link href='/user'>
			<Avatar.Img src='/user.png' hasHover />
		</Avatar.Link>
	</Avatar>

	<Avatar>
		<Avatar.Link href='/user'>
			<Avatar.Img src='/user.png' hasHover />
		</Avatar.Link>
	</Avatar>

	<Avatar>
		<Avatar.Link href='/user'>
			<Avatar.Img src='/user.png' hasHover />
		</Avatar.Link>
	</Avatar>

	<Avatar>
		<Avatar.Link href='/user'>
			<Avatar.Img src='/user.png' hasHover />
		</Avatar.Link>
	</Avatar>
</AvatarGroup>`;
