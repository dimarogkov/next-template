import { ReactNode } from 'react';

type Props = {
    navigation?: ReactNode;
    children?: ReactNode;
};

export default function ComponentsWrapper({ navigation, children }: Props) {
    return (
        <>
            {children}
            {navigation}
        </>
    );
}
