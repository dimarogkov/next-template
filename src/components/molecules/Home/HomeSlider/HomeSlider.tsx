import { DEV_ICONS } from '@constants';
import { DevIcon } from '@components/molecules';

type Props = {
    className?: string;
};

export default function HomeSlider({ className = '' }: Props) {
    return (
        <div
            className={`relative left-0 md:left-auto flex space-x-2 w-[calc(100%+40px)] sm:w-[calc(100%+60px)] md:w-full overflow-hidden ${className}`}
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
}
