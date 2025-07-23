/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import { debounce } from '@/src/helpers';
import { Input } from '@/src/components/ui';

type Props = {
    setAppliedSearchValue: Dispatch<SetStateAction<string>>;
};

const SearchTodo: FC<Props> = ({ setAppliedSearchValue = () => {} }) => {
    const [value, setValue] = useState('');

    const applySearchValue = useCallback(debounce(setAppliedSearchValue, 700), []);

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
