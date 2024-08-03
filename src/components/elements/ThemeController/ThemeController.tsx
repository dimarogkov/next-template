'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';

type Props = {
    className?: string;
};

const ThemeController: React.FC<Props> = ({ className = '' }) => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const changeTheme = () => {
        resolvedTheme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        mounted && (
            <label className={`flex items-center cursor-pointer gap-x-3 ${className}`}>
                <LuSun className='w-5 h-5 text-black' />

                <input
                    type='checkbox'
                    value='theme'
                    checked={resolvedTheme === 'dark'}
                    onChange={changeTheme}
                    className='toggle theme-controller text-black border-black'
                />

                <LuMoon className='w-5 h-5 text-black' />
            </label>
        )
    );
};

export default ThemeController;
