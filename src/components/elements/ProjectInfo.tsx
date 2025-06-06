import { FC } from 'react';
import { devIcons } from '@/src/variables/devIcons';
import { EnumText, EnumTitle } from '@/src/types/enums';

import DevIcon from './DevIcon';
import { BtnLink, Text, Title } from '../ui';
import { ArrowUpRight } from 'lucide-react';

type Props = {
    className?: string;
};

const ProjectInfo: FC<Props> = ({ className = '' }) => {
    return (
        <div className={`relative w-full ${className}`}>
            <div className='flex flex-col gap-4 w-full mb-8 last:mb-0'>
                <Title titleType={EnumTitle.h2}>React Template</Title>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full'>
                    {devIcons.map((icon, text) => (
                        <DevIcon key={text} devIcon={icon} />
                    ))}
                </div>

                <Text textType={EnumText.large}>
                    This is React Template for development. Technolgies used: React, TypeScript, Tailwind CSS, Axios,
                    React Query, React Hook Form, Yup, Frame Motion, Debounce, Redux Toolkit, Zustand.
                </Text>

                <BtnLink href='https://github.com/dimarogkov/next-template' target='_blank'>
                    <span>Git Repo</span>
                    <ArrowUpRight className='size-5' />
                </BtnLink>
            </div>
        </div>
    );
};

export default ProjectInfo;
