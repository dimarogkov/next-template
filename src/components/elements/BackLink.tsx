import { FC } from 'react';
import { PATHS } from '@/src/variables/paths';
import { BtnLink } from '../ui';

type Props = {
    href?: string;
    className?: string;
};

const BackLink: FC<Props> = ({ href = PATHS.HOME, className = '' }) => {
    return (
        <BtnLink href={href} className={className}>
            Back
        </BtnLink>
    );
};

export default BackLink;
