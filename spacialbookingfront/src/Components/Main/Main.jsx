import React, { useEffect } from "react";
import { GlobalContext } from "../globalState/GlobalState";
import ListContainer from '../ListContainer/ListContainer';
import BlockCategories from "../BlockCategories/BolckCategories";
import styles from "./Main.module.css"
import '../../stylesVariables/variables.css'

const Main = () => {


    return (
    <div className={styles.bg}>
        <BlockCategories/> 
        <ListContainer/>                   
    </div>
    )
  }

  export default Main;