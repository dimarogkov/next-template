import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import cn from 'classnames';

type Props = {
    filters: { label: string; value: 'all' | 'new' | 'updated' }[];
    statusFilter: 'all' | 'new' | 'updated';
    setStatusFilter: Dispatch<SetStateAction<'all' | 'new' | 'updated'>>;
    onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
};

export const HeaderSearchFilters = ({ filters, statusFilter, setStatusFilter, onKeyDown }: Props) => {
    return (
        <div role="group" aria-label="Filter by status" className="flex shrink-0 gap-2 px-2 py-2.5">
            {filters.map(({ label, value }) => (
                <button
                    key={value}
                    type="button"
                    aria-pressed={statusFilter === value}
                    onClick={() => setStatusFilter(value)}
                    onKeyDown={onKeyDown}
                    className={cn(
                        'cursor-pointer rounded-md border px-2.5 py-0.5 text-sm font-medium transition-colors duration-300',
                        {
                            'border-border hover:bg-grey text-text hover:text-title': statusFilter !== value,
                            'border-title bg-title text-bg pointer-events-none': statusFilter === value
                        }
                    )}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};
