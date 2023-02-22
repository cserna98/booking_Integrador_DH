import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../globalState/GlobalState";
import ListContainer from '../ListContainer/ListContainer';
import BlockCategories from "../BlockCategories/BolckCategories";
import styles from "./Main.module.css"
import '../../stylesVariables/variables.css'

const Main = () => {
      // estado global que almacena el tipo de filtro que reenderiza las
      const {url, setUrl}= GlobalContext()

      const {id} = useParams();
      // Creación de estado para guardar información de la API
      const [dataApi, setDataApi] = useState([]);
      
  
      // Creación función asincróna para consumir la API
      async function getData(url){
          const data = await fetch(url);
          const dataCategories = await data.json();
          setDataApi(dataCategories)
      }
      
      useEffect(()=>{
          if(id){
              console.log({id})
              const urlcategory = `http://localhost:8080/api/productos/categoria/${id}`;
              setUrl(urlcategory)
          }
          
      },[id])


    return (
    <div className={styles.bg}>
        <BlockCategories/> 
        <ListContainer/>                   
    </div>
    )
  }

  export default Main;