import React, { useEffect } from "react";
import { GlobalContext } from "../globalState/GlobalState";
import ListContainer from '../ListContainer/ListContainer';
import BlockCategories from "../BlockCategories/BolckCategories";
import styles from "./Main.module.css"
import '../../stylesVariables/variables.css'

const Main = () => {

    const {renderForm,setUrl} = GlobalContext()

    useEffect(()=>{
        setUrl("http://localhost:8080/api/productos/random")
    },[])



    console.log(renderForm, "main")

    return (
    <div className={styles.bg}>
        <BlockCategories/> 
        <ListContainer/>                   
    </div>
    )
  }

  export default Main;