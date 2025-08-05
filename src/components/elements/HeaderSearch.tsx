/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { debounce, getLinks } from '@/src/helpers';
import { HeaderSearchLink } from '@/src/components/elements';
import { Input, Label, Modal, Text } from '../ui';
import { Search } from 'lucide-react';

const HeaderSearch = () => {
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
        ...storeLinks.map((link) => ({ ...link, label: 'Store' })),
    ];

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
                <Label className='hidden md:block !w-44 pointer-events-none'>
                    <Input placeholder='Search...' disabled className='!h-9 !px-2.5 !border-none !bg-border' />
                </Label>
            </Modal.Trigger>
            <Modal.Content disableCloseBtn>
                <div className='flex flex-col w-full h-[420px]'>
                    <div className='w-full p-2'>
                        <Label className='!flex items-center'>
                            <Input
                                name='search'
                                placeholder='Search documentation...'
                                value={searchValue}
                                onChange={({ target }) => toggleSearch(target.value)}
                                className='!pl-10'
                                autoFocus
                            />
                            <Search className='absolute left-3 size-5' />
                        </Label>
                    </div>

                    {filteredLinks.length > 0 ? (
                        <div className='w-full p-2 pt-1 overflow-auto'>
                            {filteredLinks.map((link) => (
                                <HeaderSearchLink key={link.name} link={link} />
                            ))}
                        </div>
                    ) : (
                        <div className='flex items-center grow w-full p-2 pt-1'>
                            <Text className='text-center'>No results found.</Text>
                        </div>
                    )}
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default HeaderSearch;
