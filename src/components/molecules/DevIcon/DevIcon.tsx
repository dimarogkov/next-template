import { IDevIcon } from '@interfaces/DevIcon';
import { Text } from '@components/atoms';
import cn from 'classnames';

type Props = {
    devIcon: IDevIcon;
    className?: string;
};

export const DevIcon = ({ devIcon, className = '' }: Props) => {
    const { icon, text } = devIcon;

    return (
        <div
            className={cn(
                'border-border relative flex items-center gap-2 rounded-full border px-3.5 py-1 whitespace-nowrap',
                className
            )}
        >
            <span className="flex size-5 shrink-0 items-center justify-center">
                <i className={`text-xl ${icon}`} />
            </span>

            <Text className="w-fit! select-none">{text}</Text>
        </div>
    );
};
