import React, { useState } from "react";
import styles from "./Header.module.css"
import logo from "../../assets/img/ovniriclogoPurple.png";
import lema from "../../assets/img/ovniriclemaPurple.png"
import {FaBars,FaTimes} from "react-icons/fa"
import { GlobalContext } from "../globalState/GlobalState";
import { Link } from "react-router-dom"

const Header = () => {

  const {renderForm,setRenderForm,isLoged,setLogin}= GlobalContext()
 


  const [isOpen,setOpen] = useState(false);
 
  

  const handleMenu = () => {
  setOpen(!isOpen);
  };

  const handleSingUp = () =>{    
    setRenderForm(()=>"SignUp")
}

const handleLogIn = () =>{
  setRenderForm(()=>"LogIn")
  console.log(renderForm)
}

  const handleLoged = () =>{
    setLogin(false);

  }  

    return <>
    <header className={styles.header}>
      <Link to="/" className={styles.logo}><img  className={styles.logo} src={logo} alt="Logo Ovniric" /></Link>
      <Link to="/" className={styles.lema}><img  className={styles.lema} src={lema} alt="Lema Ovniric" /></Link>
      {isLoged ?
      <>
          <div className={styles.avatar}></div>
          <a href="#" className={styles.username}>username</a>
          <button className={`${styles.btn} ${styles.logout}` } onClick={handleLoged} >Log out</button>          
        </> : 
        <>
          <Link to="/signup"  className={`${styles.loginbtn}` }>
            <button className={` ${styles.btn} ${renderForm == "SignUp" ? styles.Disp_none : "" }`} onClick={handleSingUp}>Sign up </button>
          </Link>
          <Link to="/login" className={`${styles.signupbtn} `}>
            <button className={` ${styles.btn} ${renderForm == "LogIn" ? styles.Disp_none : "" } `}  onClick={handleLogIn}>Log in</button>
          </Link>
          
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
          <Link to="/login" className={styles.hamburguerlogin} onClick={handleSingUp}> Log in</Link>
          <Link to="/signup" className={styles.hamburguersignup} onClick={handleLogIn}>Sign up</Link>
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