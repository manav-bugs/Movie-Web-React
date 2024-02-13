import React, { useContext } from "react";
const AppContext= React.createContext();


const AppProvider =({children})=>{
    return <AppContext.Provider value='thapa'>
        {children}
    </AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};