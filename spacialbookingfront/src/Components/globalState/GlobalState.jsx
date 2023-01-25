import React from 'react';
import { useContext,useState,createContext} from "react";

export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {

const [renderForm,setRenderForm] = useState(null);    
 

    
   
    return (
      <ContextGlobal.Provider value={{renderForm,setRenderForm}}>
        {children}
      </ContextGlobal.Provider>
    );
  
}

export const GlobalContext= ()=> useContext(ContextGlobal)
