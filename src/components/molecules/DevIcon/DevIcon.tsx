import { IDevIcon } from '@interfaces/DevIcon';
import { Text } from '@components/atoms';

type Props = {
    devIcon: IDevIcon;
    className?: string;
};

export default function DevIcon({ devIcon, className = '' }: Props) {
    const { icon, text } = devIcon;

    return (
        <div
            className={`relative flex items-center gap-2 px-3.5 py-1 rounded-full border border-border whitespace-nowrap ${className}`}
        >
            <i className={`text-xl ${icon}`} />
            <Text className='select-none !w-fit'>{text}</Text>
        </div>
    );
}
