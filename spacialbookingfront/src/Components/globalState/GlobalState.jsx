import React from 'react';
import { useContext,useState,createContext} from "react";

export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameUser, setNameUser] = useState("");
    const [lastNameUser, setLastNameUser] = useState("");

  
const [isLoged,setLogin] = useState(false); 
const [renderForm,setRenderForm] = useState(null);    
 

    console.log(email)
   console.log(password)
    return (
      <ContextGlobal.Provider value={{renderForm,setRenderForm,isLoged,setLogin,email,setEmail,password,setPassword, nameUser, setNameUser, lastNameUser, setLastNameUser}}>
        {children}
      </ContextGlobal.Provider>
    );
  
}

export const GlobalContext= ()=> useContext(ContextGlobal)
