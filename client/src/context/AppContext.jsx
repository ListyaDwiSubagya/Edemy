import React from 'react';
import { createContext } from "react";

export const AppContext = createContext()

export const AppContextProvider = (proos) => {

    const value = {

    }

    return (
        <AppContext.Provider value={value}>
            {proos.children}
        </AppContext.Provider>
    )

}