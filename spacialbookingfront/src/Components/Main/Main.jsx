import React from 'react';
import { GlobalContext } from "../globalState/GlobalState"
import SearchBlock from "../SearchBlock/SearchBlock";
import BlockCategories from "../BlockCategories/BolckCategories";

const Main = () => {

    const {renderForm} = GlobalContext()

    console.log(renderForm)

    return (
    <div>
        {
            renderForm === "SignUp" ?  
            <div>soy el componente Sign up </div> : 

             renderForm === "SignIn" ? 
             <div>soy el componente Sign In </div>:       
            <>
                <SearchBlock/> 
                <BlockCategories/> 
            </>
            }
    </div>
    )
  }

  export default Main;