import Link from 'next/link';
import { HEADER_SWITCH_ITEMS } from '@constants';
import cn from 'classnames';

export const HeaderSwitch = () => {
    return (
        <div className="border-border relative flex h-9 items-center gap-1 rounded-md border p-0.5">
            {HEADER_SWITCH_ITEMS.map(({ name, link, icon, isActive }) => (
                <Link
                    key={icon}
                    href={link}
                    aria-label={name}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn('group flex size-7.5 items-center justify-center rounded-md select-none', {
                        'bg-border pointer-events-none': isActive
                    })}
                >
                    <i
                        className={cn(`text-[22px] ${icon} transition-colors duration-300`, {
                            'group-hover:text-title': !isActive,
                            'text-title': isActive
                        })}
                    />
                </Link>
            ))}
        </div>
    );
};
