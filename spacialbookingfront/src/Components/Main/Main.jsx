import React from "react";
import { GlobalContext } from "../globalState/GlobalState";
import ListContainer from '../ListContainer/ListContainer';
import BlockCategories from "../BlockCategories/BolckCategories";

const Main = () => {

    const {renderForm} = GlobalContext()

    console.log(renderForm)

    return (
    <div className=''>        
        <BlockCategories/> 
        <ListContainer/>                   
    </div>
    )
  }

  export default Main;