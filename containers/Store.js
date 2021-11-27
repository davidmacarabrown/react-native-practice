import React, { useState } from 'react';

export const Context = React.createContext();

const Store = ({ children }) => {

    const [userData, setUserData] = useState({});

    return(
        <Context.Provider value={[userData, setUserData]}>
            {children}
        </Context.Provider>
    )
}

export default Store;