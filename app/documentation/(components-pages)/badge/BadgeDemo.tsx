import { Badge } from '@components/atoms';
import { User } from 'lucide-react';

export default function BadgeDemo() {
    return (
        <div className='relative flex flex-wrap gap-2 w-full'>
            <Badge>Default Badge</Badge>
            <Badge type='secondary'>Secondary Badge</Badge>
            <Badge type='outline'>Outline Badge</Badge>

            <Badge>
                <User className='size-5' />
                <span>Icon Badge</span>
            </Badge>
        </div>
    );
}
