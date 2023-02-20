import React from 'react';
import { useContext,useState,createContext, useEffect} from "react";



export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({}); 
    const [lastNameUser, setLastNameUser] = useState("");
    const[actualProductId, SetActualproductId]= useState({});
    const [isLoged,setLogin] = useState(true); 
    const [renderForm,setRenderForm] = useState(null);    
    const [dataproduct, setDataProduct] = useState([]);
    const [idProduct, setIdProduct] = useState();
    const [loginModal,setLoginModal] = useState(false);
   
    

    const [displayedProducts, setDisplayedProducts] = useState([]);
    
    
    
      async function fetchDataProduct() {
        const response = await fetch('http://3.22.186.197:8080/api/productos');
        const data = await response.json();
        setDataProduct(data)
        console.log(dataproduct)
      }

      useEffect(()=>{
        fetchDataProduct()
    },[])
      


    return (
      <ContextGlobal.Provider
      value={{renderForm,
      setRenderForm,
      isLoged,
      setLogin,
      user,
      setUser,
      lastNameUser,
      setLastNameUser,
      dataproduct,
      setDataProduct,
      idProduct,
      setIdProduct,
      actualProductId,
      SetActualproductId,
      displayedProducts,
      setDisplayedProducts,
      fetchDataProduct,
      loginModal,
      setLoginModal
          }}>
        {children}
      </ContextGlobal.Provider>
    );
  
}

export const GlobalContext= ()=> useContext(ContextGlobal)
