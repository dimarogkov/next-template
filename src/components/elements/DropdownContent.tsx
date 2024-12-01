'use client';
import { Dispatch, FC, SetStateAction } from 'react';
import { Btn, Text } from '../ui';

type Props = {
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

const DropdownContent: FC<Props> = ({ setIsOpen = () => {}, className = '' }) => {
    return (
        <div className={`relative w-full ${className}`}>
            <ul className='flex flex-col gap-2 w-full mb-4 last:mb-0'>
                <li>
                    <Text>Lorem, ipsum dolor sit amet consectetur</Text>
                </li>
                <li>
                    <Text>Item 2</Text>
                </li>
                <li>
                    <Text>Item 3</Text>
                </li>
                <li>
                    <Text>Item 4</Text>
                </li>
            </ul>

            <Btn onClick={() => setIsOpen(false)}>Close Dropdown</Btn>
        </div>
    );
};

export default DropdownContent;
