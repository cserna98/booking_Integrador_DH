import React from 'react';
import { useContext,useState,createContext, useEffect} from "react";


export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameUser, setNameUser] = useState("");
    const [lastNameUser, setLastNameUser] = useState("");
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [isLoged,setLogin] = useState(false); 
    const [renderForm,setRenderForm] = useState(null);    
    const [dataproduct, setDataProduct] = useState([])


    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:8080/api/productos');
        const data = await response.json();
        setDataProduct(data);
      }
      fetchData();
      console.log(dataproduct)
    }, []);
  
  
  



 

    console.log(email)
    console.log(password)
    return (
      <ContextGlobal.Provider
      value={{renderForm,
      setRenderForm,
      isLoged,
      setLogin,
      email,
      setEmail,
      password,
      setPassword,
      nameUser,
      setNameUser,
      lastNameUser,
      setLastNameUser,
      displayedProducts,
      setDisplayedProducts,
      dataproduct,
      setDataProduct
          }}>
        {children}
      </ContextGlobal.Provider>
    );
  
}

export const GlobalContext= ()=> useContext(ContextGlobal)
