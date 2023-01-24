import React, { useState } from "react";
import styles from "./Header.module.css"
import logo from "../../assets/img/ovniriclogoPurple.png";
import lema from "../../assets/img/ovniriclemaPurple.png"
import {FaBars,FaTimes} from "react-icons/fa"
import { GlobalContext } from "../globalState/GlobalState";

const Header = () => {

  const {renderForm,setRenderForm}= GlobalContext()



  const [isOpen,setOpen] = useState(false);
  const [isLoged,setLogin] = useState(true);
  

  const handleMenu = () => {
  setOpen(!isOpen);
  };

  const handleSingUp = () =>{    
    setRenderForm(()=>"SignUp")
    console.log(renderForm)
}

const handleSingIn = () =>{
  setRenderForm(()=>"SignIn")
}

  const handleLoged = () =>{
    setLogin(!isLoged);
    console.log(isLoged)
  }

 

  

    return <>
    <header className={styles.header}>
      <a href="#" className={styles.logo}><img  className={styles.logo} src={logo} alt="Logo Ovniric" /></a>
      <a href="#" className={styles.lema}><img  className={styles.lema} src={lema} alt="Lema Ovniric" /></a>
      {isLoged ?
      <>
         <div className={styles.avatar}></div>
          <a href="#" className={styles.username}>username</a>
          <button className={`${styles.btn} ${styles.logout}` } onClick={handleLoged} >Log out</button>          
        </> : 
        <>
          <button className={`${styles.signupbtn} ${styles.btn} ${renderForm == "SignUp" ? styles.Disp_none : ""}`} onClick={handleSingUp}>Sign up </button>
          <button className={`${styles.loginbtn} ${styles.btn} ${renderForm == "SignIn" ? styles.Disp_none : ""}`}  onClick={handleSingIn}>Log in</button>
        </>
     }
        <span  className={styles.menu} onClick={handleMenu}>{isOpen ? <FaTimes/> : <FaBars/>}</span>
      {isOpen ? <div className={styles.menuarea}>
         {isLoged ? 
        <>
          <div className={` ${styles.hamburgueravatar}`}></div>
          <a href="#" className={` ${styles.hamburguerusername}`}>username</a>
          <a href="#" className={styles.hamburguerlogout}>Log out</a>
        </> :
        <>
          <a href="#" className={styles.hamburguerlogin}> Log in</a>
          <a href="#" className={styles.hamburguersignup}>Sign up</a>
        </>  
        }
        </div> : 
        <>
        </>
        }
       
       </header>
    </>
}

export default Header;