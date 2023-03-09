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
    const [loginModal,setLoginModal] = useState(false);
    const [emailUser, setEmailUser] = useState();
    const [role, setRole] = useState("")
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    

    const [displayedProducts, setDisplayedProducts] = useState([]);
    

    const getToken = async (email, password) => {
      try {
        const response = await fetch('http://18.220.89.28:8080/api/v1/auth/authenticate', {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          setLogin(true);
          return response;
        } else {
          throw new Error('Credenciales inválidas');
        }
      } catch (error) {
        alert(error.message);
      }
    };

    // fecth de usuario cuando se encuentre logeado
    async function fetchDataUser(url) {
      console.log(url)
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setUser(data);
      localStorage.setItem('EmailUser', data.email)
      localStorage.setItem('RoleUser', data.role.name)    
    }

    useEffect(()=>{
      console.log(user)
      if(localStorage.getItem('EmailUser') !== null){
        const email = localStorage.getItem('EmailUser');
        fetchDataUser(`http://18.220.89.28:8080/api/usuarios/email/${email}`)
      }
    },[])

    useEffect(()=>{
      if(localStorage.getItem('token') !== null){
        setLogin(true)
      } 
      setRole(localStorage.getItem('RoleUser'))
    },[user])
  



    
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
      url,
      setUrl,
      loginModal,
      setLoginModal,
      emailUser,
      setEmailUser,
      fetchDataUser,
      getToken,
      role,
      setRole,
      startDate,
       setStartDate,
       endDate,
        setEndDate
          }}>
        {children}
      </ContextGlobal.Provider>
    );
  
}

export const GlobalContext= ()=> useContext(ContextGlobal)
