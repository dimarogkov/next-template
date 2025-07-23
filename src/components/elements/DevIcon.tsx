import { FC } from 'react';
import { IDevIcon } from '@/src/types/interfaces/DevIcon';
import { Text } from '@/src/components/ui';

type Props = {
    devIcon: IDevIcon;
    className?: string;
};

const DevIcon: FC<Props> = ({ devIcon, className = '' }) => {
    const { icon, text } = devIcon;

    return (
        <div
            className={`relative flex flex-col gap-2 w-full text-center p-5 rounded-md border border-border cursor-pointer transition-colors duration-300 hover:text-title hover:bg-border ${className}`}
        >
            <i className={`text-[32px] sm:text-[40px] ${icon}`} />

            <Text size='large' className='select-none'>
                {text}
            </Text>
        </div>
    );
};

export default DevIcon;
