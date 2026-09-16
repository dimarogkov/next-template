import { ReactNode } from 'react';

type Props = {
    navigation?: ReactNode;
    children?: ReactNode;
};

export const ComponentsWrapper = ({ navigation, children }: Props) => {
    return (
        <>
            {children}
            {navigation}
        </>
    );
};
