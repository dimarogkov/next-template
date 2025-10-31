export const BADGE_USAGE_CODE = `import { Badge } from '@components/atoms';

{/* Default type by default */}
<Badge type='default | secondary | outline'>Badge</Badge>`;

export const BADGE_ICON_USAGE_CODE = `import { Badge } from '@components/atoms';
import { User } from 'lucide-react';

<Badge>
	<User className='size-5' />
	<span>Icon Badge</span>
</Badge>`;
