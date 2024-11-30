/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useCallback, useState } from 'react';
import { useTodo } from '@/src/store/zustand';
import { debounce } from '@/src/helpers';
import { Input } from '../ui';

const SearchTodo = () => {
    const { setSearchValue } = useTodo((state) => state);
    const [value, setValue] = useState('');

    const applySearchValue = useCallback(debounce(setSearchValue, 700), []);

    const handleSearch = (value: string) => {
        applySearchValue(value);
        setValue(value);
    };

    return (
        <div className='relative w-full mb-3 last:mb-0s'>
            <Input
                name='search'
                placeholder='Find Todo'
                value={value}
                onChange={({ target }) => handleSearch(target.value)}
            />
        </div>
    );
};

export default SearchTodo;
