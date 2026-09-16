/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@constants';
import { debounce, getLinks } from '@utils';
import { HeaderSearchLink } from '@components/molecules';
import { Input, Label, Modal, Text } from '@components/atoms';
import { Search } from 'lucide-react';
import cn from 'classnames';

export const HeaderSearch = () => {
    const [appliedSearchValue, setAppliedSearchValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        setAppliedSearchValue('');
        setSearchValue('');
    }, [pathname]);

    const applySearchValue = useCallback(debounce(setAppliedSearchValue, 500), []);

    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    const links = [
        ...componentsLinks.map((link) => ({ ...link, label: 'Component' })),
        ...dataFetchingLinks.map((link) => ({ ...link, label: 'Data Fetching' })),
        ...formValidationLinks.map((link) => ({ ...link, label: 'Form Validation' })),
        ...storeLinks.map((link) => ({ ...link, label: 'Store' }))
    ].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    const filteredLinks = useMemo(() => {
        const value = appliedSearchValue.trim().toLowerCase();

        if (!value) {
            return links;
        }

        return links.filter(({ name }) => name.trim().toLowerCase().includes(value));
    }, [appliedSearchValue, links]);

    const toggleSearch = (value: string) => {
        applySearchValue(value);
        setSearchValue(value);
    };

    return (
        <Modal>
            <Modal.Trigger>
                <Label className="pointer-events-none hidden w-44! md:block">
                    <Input
                        placeholder="Search..."
                        disabled
                        className={cn('bg-border! h-9! border-none! px-3!', {
                            'placeholder:text-title': pathname === PATHS.HOME
                        })}
                    />
                </Label>
            </Modal.Trigger>

            <Modal.Content disableCloseBtn>
                <div className="flex h-105 w-full flex-col">
                    <div className="w-full p-2">
                        <Label className="flex! items-center">
                            <Input
                                name="search"
                                placeholder="Search documentation..."
                                value={searchValue}
                                onChange={({ target }) => toggleSearch(target.value)}
                                className="border-border! bg-border! pl-10!"
                                autoFocus
                            />

                            <Search className="absolute left-3 size-5" />
                        </Label>
                    </div>

                    {filteredLinks.length > 0 ? (
                        <div className="w-full overflow-auto p-2 pt-1">
                            {filteredLinks.map((link) => (
                                <HeaderSearchLink key={link.name} link={link} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex w-full grow items-center p-2 pt-1">
                            <Text className="text-center">No results found.</Text>
                        </div>
                    )}
                </div>
            </Modal.Content>
        </Modal>
    );
};
