'use client';
import { Dispatch, FC, SetStateAction } from 'react';
import { Btn, Line, Text, Title } from '../ui';
import { EnumTitle } from '../../types/enums';

type Props = {
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

const ModalContent: FC<Props> = ({ setIsOpen = () => {}, className = '' }) => {
    return (
        <div className={`relative w-full ${className}`}>
            <Title titleType={EnumTitle.h2}>Modal Close Btn</Title>

            <Line />

            <div className='flex flex-col gap-2 w-full mb-5 last:mb-0'>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor nulla delectus sint optio
                    cum ducimus vitae placeat veritatis vero deleniti, voluptatibus fugit. Laudantium error cum earum
                    rem hic!
                </Text>

                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor nulla delectus sint optio
                    cum ducimus vitae placeat veritatis vero deleniti, voluptatibus fugit. Laudantium error cum earum
                    rem hic!
                </Text>
            </div>

            <Btn onClick={() => setIsOpen(false)}>Close Modal</Btn>
        </div>
    );
};

export default ModalContent;
