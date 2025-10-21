import { useContext } from 'react';
import { MainContext } from '@providers';

export default function useMain() {
	const context = useContext(MainContext);

    if (!context) {
        throw new Error('useMain must be used within MainProvider');
    }

    return context;
}