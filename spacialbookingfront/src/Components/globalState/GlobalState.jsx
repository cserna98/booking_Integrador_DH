import React from 'react';
import { useContext,useState,createContext, useEffect} from "react";


export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameUser, setNameUser] = useState("");
    const [lastNameUser, setLastNameUser] = useState("");


    const[actualProduct, SetActualproduct]= useState({});
    const [isLoged,setLogin] = useState(false); 
    const [renderForm,setRenderForm] = useState(null);    
    const [dataproduct, setDataProduct] = useState([]);
    const [idProduct, setIdProduct] = useState();
   
    

    const [displayedProducts, setDisplayedProducts] = useState([]);




    useEffect(() => {
      async function fetchDataProduct() {
        const response = await fetch('http://localhost:8080/api/productos');
        const data = await response.json();
        setDataProduct(data);
      }
      fetchDataProduct()
    }, []);

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

      dataproduct,
      setDataProduct,
      idProduct,
      setIdProduct,
      actualProduct,
      SetActualproduct,
      displayedProducts,
      setDisplayedProducts,
    


          }}>
        {children}
      </ContextGlobal.Provider>
    );
  
}

export const GlobalContext= ()=> useContext(ContextGlobal)
