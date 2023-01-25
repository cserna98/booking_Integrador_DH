import React from 'react';
import { GlobalContext } from "../globalState/GlobalState"
import SearchBlock from "../SearchBlock/SearchBlock";
import BlockCategories from "../BlockCategories/BolckCategories";

const Main = () => {

    const {renderForm} = GlobalContext()

    console.log(renderForm)

    return (
    <div>
        <SearchBlock/> 
        <BlockCategories/>                    
    </div>
    )
  }

  export default Main;