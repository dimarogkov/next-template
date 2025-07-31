import { Badge } from '@/src/components/ui';
import { User } from 'lucide-react';

const BadgePreview = () => {
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
};

export default BadgePreview;
