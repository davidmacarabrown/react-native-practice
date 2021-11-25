import React, { useState } from 'react';

export const Context = React.createContext();

const Store = ({ children }) => {

    const [userData, setUserData] = useState({});
    const [taskData, setTaskData] = useState([]);

    return(
        <Context.Provider value={{ user: [userData, setUserData], tasks: [taskData, setTaskData]}}>
            {children}
        </Context.Provider>
    )
}

export default Store;