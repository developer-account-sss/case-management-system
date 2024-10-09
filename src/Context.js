const { createContext, useState } = require("react")

export const CollapseMenu = createContext();

const Context = ({ children }) => {
    const [collapseMenu, setCollapseMenu]= useState(false);


    return (
        <CollapseMenu.Provider value={{ collapseMenu, setCollapseMenu }}>
            {children}
        </CollapseMenu.Provider>
    )
}

export default Context;