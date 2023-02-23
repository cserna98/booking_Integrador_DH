import React, { useState, useEffect } from "react";
import styles from "./Header.module.css"
import logo from "../../assets/img/ovniricLogoLight.png";
import lema from "../../assets/img/ovniricLemaLight.png"
import {FaBars,FaTimes} from "react-icons/fa"
import { GlobalContext } from "../globalState/GlobalState";
import { Link } from "react-router-dom"
import '../../stylesVariables/variables.css'

const Header = () => {

  const {renderForm,setRenderForm,isLoged,setLogin, user}= GlobalContext()
 


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

const handleLogo = () => {
  setRenderForm(null)
}

async function logout() {
    setLogin(false);
    setRenderForm(null);
    console.log(localStorage.getItem('token'))
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/logout", {
        method: 'POST',
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 204) {
        // Logout successful, remove token from local storage and redirect to login page
        localStorage.removeItem('token');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error(error);
    }
  
  }  
  
  useEffect(()=>{
    let name = user.firstname
    console.log(name)
  },[isLoged])
  
  console.log(user)

    return <>
    <header className={styles.header}>
      <Link to="/" className={styles.logo} onClick={handleLogo}><img  className={styles.logo} src={logo} alt="Logo Ovniric" /></Link>
      <Link to="/" className={styles.lema} onClick={handleLogo}><img  className={styles.lema} src={lema} alt="Lema Ovniric" /></Link>
      {isLoged ?
      <>
          <div className={styles.avatar}><span> {/*`${name}${user.lastName}`*/} </span></div>
          <a href="#" className={styles.username}>{/*`Hola ${name}`*/}</a>
          <button className={`${styles.btn} ${styles.logout}` } onClick={logout} >Log out</button>          
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