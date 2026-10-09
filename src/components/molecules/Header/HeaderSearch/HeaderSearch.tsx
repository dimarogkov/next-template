/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { KeyboardEvent as ReactKeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMain } from '@hooks';
import { HeaderSearchFilters, HeaderSearchFooter, HeaderSearchLink, HeaderSearchTrigger } from '@components/molecules';
import { Input, Kbd, Label, Modal, Text } from '@components/atoms';
import { canTriggerGlobalSearchShortcut, debounce, getLinks } from '@utils';
import { Search } from 'lucide-react';

type StatusFilter = 'all' | 'new' | 'updated';

const STATUS_FILTERS: { label: string; value: StatusFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'New', value: 'new' },
    { label: 'Updated', value: 'updated' }
];

export const HeaderSearch = () => {
    const [appliedSearchValue, setAppliedSearchValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

    const inputRef = useRef<HTMLInputElement>(null);
    const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
    const triggerRef = useRef<HTMLDivElement>(null);
    const { setIsSidebarOpen } = useMain();
    const pathname = usePathname();

    const resetSearchState = useCallback(() => {
        setAppliedSearchValue('');
        setSearchValue('');
        setStatusFilter('all');
    }, []);

    useEffect(() => {
        resetSearchState();
    }, [pathname, resetSearchState]);

    const handleModalOpenChange = useCallback(
        (isOpen: boolean) => {
            if (!isOpen) resetSearchState();
        },
        [resetSearchState]
    );

    const applySearchValue = useCallback(debounce(setAppliedSearchValue, 500), []);

    useEffect(() => {
        return () => applySearchValue.cancel();
    }, [applySearchValue]);

    useEffect(() => {
        const handleShortcut = (e: KeyboardEvent) => {
            if (e.key === '/' && canTriggerGlobalSearchShortcut(document.activeElement)) {
                e.preventDefault();
                setIsSidebarOpen(false);
                triggerRef.current?.click();
            }
        };

        window.addEventListener('keydown', handleShortcut, { capture: true });

        return () => window.removeEventListener('keydown', handleShortcut, { capture: true });
    }, []);

    const links = useMemo(() => {
        const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

        return [
            ...componentsLinks.map((link) => ({ ...link, label: 'Component' })),
            ...dataFetchingLinks.map((link) => ({ ...link, label: 'Data Fetching' })),
            ...formValidationLinks.map((link) => ({ ...link, label: 'Form Validation' })),
            ...storeLinks.map((link) => ({ ...link, label: 'Store' }))
        ].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    }, []);

    const filteredLinks = useMemo(() => {
        const value = appliedSearchValue.trim().toLowerCase();

        return links.filter((link) => {
            const matchesSearch = !value || link.name.trim().toLowerCase().includes(value);
            const matchesStatus = statusFilter === 'all' || link.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [appliedSearchValue, links, statusFilter]);

    const focusOption = (index: number) => {
        if (index < 0) {
            inputRef.current?.focus();
            return;
        }

        optionRefs.current[index]?.querySelector('a')?.focus();
    };

    const handleArrowKeyDown = (e: ReactKeyboardEvent, currentIndex: number) => {
        if (!filteredLinks.length) return;
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

        e.preventDefault();

        const nextIndex = e.key === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;

        if (nextIndex >= filteredLinks.length) return;

        focusOption(nextIndex);
    };

    const handleFiltersKeyDown = (e: ReactKeyboardEvent) => {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

        e.preventDefault();
        focusOption(e.key === 'ArrowDown' ? 0 : -1);
    };

    const toggleSearch = (value: string) => {
        applySearchValue(value);
        setSearchValue(value);
    };

    return (
        <Modal>
            <Modal.Trigger
                aria-label="Search documentation"
                className="hover:bg-border flex size-9 items-center justify-center rounded-md transition-colors duration-300 md:hidden"
            >
                <Search className="size-5" />
            </Modal.Trigger>

            <Modal.Trigger ref={triggerRef} aria-label="Search documentation" className="group hidden md:block">
                <HeaderSearchTrigger />
            </Modal.Trigger>

            <Modal.Content disableCloseBtn onOpenChange={handleModalOpenChange}>
                <div className="flex h-116 max-h-[90svh] w-full flex-col sm:h-128">
                    <div className="w-full shrink-0 px-2 pt-2">
                        <Label className="relative flex! items-center">
                            <Input
                                ref={inputRef}
                                name="search"
                                aria-label="Search documentation"
                                placeholder="Search documentation..."
                                value={searchValue}
                                onChange={({ target }) => toggleSearch(target.value)}
                                onKeyDown={(e) => handleArrowKeyDown(e, -1)}
                                className="border-border! bg-border! pr-12! pl-10!"
                                autoFocus
                            />

                            <Search className="absolute left-3 size-5" />

                            <Kbd aria-hidden="true" className="absolute right-2">
                                Esc
                            </Kbd>
                        </Label>
                    </div>

                    <span aria-live="polite" className="sr-only">
                        {filteredLinks.length} result{filteredLinks.length === 1 ? '' : 's'} found
                    </span>

                    <HeaderSearchFilters
                        filters={STATUS_FILTERS}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        onKeyDown={handleFiltersKeyDown}
                    />

                    {filteredLinks.length > 0 ? (
                        <ul
                            aria-label="Search results"
                            className="flex min-h-0 w-full flex-1 flex-col gap-2 overflow-auto px-2 pb-2"
                        >
                            {filteredLinks.map((link, index) => (
                                <li
                                    key={link.name}
                                    ref={(el) => {
                                        optionRefs.current[index] = el;
                                    }}
                                >
                                    <HeaderSearchLink link={link} onKeyDown={(e) => handleArrowKeyDown(e, index)} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex min-h-0 w-full flex-1 items-center px-2">
                            <Text className="text-center">No results found.</Text>
                        </div>
                    )}

                    <HeaderSearchFooter />
                </div>
            </Modal.Content>
        </Modal>
    );
};
