import { FC } from 'react';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { BtnLink, Text, Title } from '../ui';
import { ArrowUpRight } from 'lucide-react';

type Props = {
    className?: string;
};

const ProjectInfo: FC<Props> = ({ className = '' }) => {
    return (
        <div className={`relative w-full ${className}`}>
            <div className='w-full mb-8 last:mb-0'>
                <Title titleType={EnumTitle.h2} className='mb-3 last:mb-0'>
                    React Template
                </Title>

                <Text textType={EnumText.large} className='mb-3 last:mb-0'>
                    This is React Template for development. Technolgies used: React, TypeScript, Tailwind CSS, Axios,
                    React Query, React Hook Form, Yup, Debounce, Redux Toolkit, Zustand.
                </Text>

                <BtnLink href='https://github.com/dimarogkov/react-template' target='_blank'>
                    <span>Git Repo</span>
                    <ArrowUpRight className='w-5 h-5' />
                </BtnLink>
            </div>
        </div>
    );
};

export default ProjectInfo;
