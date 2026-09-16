import { useContext } from 'react';
import { MainContext } from '@providers';

export const useMain = () => {
    const context = useContext(MainContext);

    if (!context) {
        throw new Error('useMain must be used within MainProvider');
    }

    return context;
};
