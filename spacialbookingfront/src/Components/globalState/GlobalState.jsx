import React from 'react';
import { useContext,useState,createContext, useEffect} from "react";



export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({}); 
    const [lastNameUser, setLastNameUser] = useState("");
    const[actualProductId, SetActualproductId]= useState({});
    const [isLoged,setLogin] = useState(false); 
    const [renderForm,setRenderForm] = useState(null);    
    const [dataproduct, setDataProduct] = useState([]);
    const [idProduct, setIdProduct] = useState();
    const [url, setUrl] = useState("");
   
    

    const [displayedProducts, setDisplayedProducts] = useState([]);
    

    
    
      async function fetchDataProduct() {
        const response = await fetch('http://localhost:8080/api/productos');
        const data = await response.json();
        setDataProduct(data)
        console.log(dataproduct)
      }


      useEffect(()=>{
        //fetchDataProduct()
        console.log("renderizando el gglobal")
        setUrl("http://localhost:8080/api/productos/random")
        console.log("Main")
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
      url,
      setUrl
          }}>
        {children}
      </ContextGlobal.Provider>
    );
  
}

export const GlobalContext= ()=> useContext(ContextGlobal)
