import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/redux-toolkit';

type Props = {
    children?: ReactNode;
};

export default function StoreProvider({ children }: Props) {
    return <Provider store={store}>{children}</Provider>;
}
