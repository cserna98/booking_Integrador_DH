import React from 'react';
import { useContext,useState,createContext} from "react";

export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
const [isLoged,setLogin] = useState(false); 
const [renderForm,setRenderForm] = useState(null);    
 

    
   
    return (
      <ContextGlobal.Provider value={{renderForm,setRenderForm,isLoged,setLogin,email,setEmail,password,setPassword}}>
        {children}
      </ContextGlobal.Provider>
    );
  
}

export const GlobalContext= ()=> useContext(ContextGlobal)
