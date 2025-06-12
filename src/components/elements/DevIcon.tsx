import { FC } from 'react';
import { EnumText } from '@/src/types/enums';
import { IDevIcon } from '@/src/types/interfaces/DevIcon';
import { Text } from '../ui';

type Props = {
    devIcon: IDevIcon;
    className?: string;
};

const DevIcon: FC<Props> = ({ devIcon, className = '' }) => {
    const { icon, text } = devIcon;

    return (
        <div
            className={`relative flex flex-col gap-2 w-full text-center text-black/30 p-5 rounded-md border border-black/30 cursor-pointer transition-colors duration-300 hover:text-blue hover:border-blue ${className}`}
        >
            <i className={`text-[32px] sm:text-[40px] md:text-[44px] ${icon}`} />
            <Text textType={EnumText.large}>{text}</Text>
        </div>
    );
};

export default DevIcon;
