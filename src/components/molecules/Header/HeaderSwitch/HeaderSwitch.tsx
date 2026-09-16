import Link from 'next/link';
import { HEADER_SWITCH_ITEMS } from '@constants';
import cn from 'classnames';

export const HeaderSwitch = () => {
    return (
        <div className="border-border relative flex h-9 items-center gap-1 rounded-md border p-0.5">
            {HEADER_SWITCH_ITEMS.map(({ link, icon, isActive }) => (
                <Link
                    key={icon}
                    href={link}
                    className={cn('group flex size-7.5 items-center justify-center rounded-md select-none', {
                        'bg-border pointer-events-none': isActive
                    })}
                >
                    <i
                        className={cn(`text-[22px] ${icon}`, {
                            'group-hover:text-title transition-colors duration-300': !isActive
                        })}
                    />
                </Link>
            ))}
        </div>
    );
};
