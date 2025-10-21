'use client';
import { createContext, ReactNode, useMemo, useState } from 'react';

type MainContextType = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
};

export const MainContext = createContext<MainContextType>({ isSidebarOpen: false, setIsSidebarOpen: () => {} });

export default function MainProvider({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const value = useMemo(
        () => ({
            isSidebarOpen,
            setIsSidebarOpen,
        }),
        [isSidebarOpen]
    );

    return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
