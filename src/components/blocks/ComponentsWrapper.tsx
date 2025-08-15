import { FC, ReactNode } from 'react';

type Props = {
    navigation?: ReactNode;
    children?: ReactNode;
};

const ComponentsWrapper: FC<Props> = ({ navigation, children }) => {
    return (
        <>
            {children}
            {navigation}
        </>
    );
};

export default ComponentsWrapper;
