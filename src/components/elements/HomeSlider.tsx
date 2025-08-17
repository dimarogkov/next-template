import { FC } from 'react';
import { DEV_ICONS } from '@/src/variables';
import { DevIcon } from '@/src/components/elements';

type Props = {
    className?: string;
};

const HomeSlider: FC<Props> = ({ className = '' }) => {
    return (
        <div
            className={`relative left-0 md:left-auto flex space-x-2 w-[calc(100%+60px)] md:w-full overflow-hidden ${className}`}
        >
            <div className='flex space-x-2 animate-loop-scroll will-change-transform'>
                {DEV_ICONS.map((icon, text) => (
                    <DevIcon key={text} devIcon={icon} />
                ))}
            </div>

            <div className='flex space-x-2 animate-loop-scroll will-change-transform' aria-hidden={true}>
                {DEV_ICONS.map((icon, text) => (
                    <DevIcon key={text} devIcon={icon} />
                ))}
            </div>
        </div>
    );
};

export default HomeSlider;
