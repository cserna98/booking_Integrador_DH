import React, { useState } from "react";
import styles from "./Header.module.css"
import logo from "../../assets/img/ovniriclogoPurple.png";
import lema from "../../assets/img/ovniriclemaPurple.png"
import {FaBars,FaTimes} from "react-icons/fa"

const Header = () => {
  const [isOpen,setOpen] = useState(false);
  const [isLoged,setLogin] = useState(true);
  const handleMenu = () => {
  setOpen(!isOpen);
  };
  const handleLogin = () =>{
    setLogin(!isLoged);
  }

    return <>
    <header className={styles.header}>
      <a href="#" className={styles.logo}><img  className={styles.logo} src={logo} alt="Logo Ovniric" /></a>
      <a href="#" className={styles.lema}><img  className={styles.lema} src={lema} alt="Lema Ovniric" /></a>
      {isLoged ? <> <div className={styles.avatar}></div>
      <a href="#" className={styles.username}>username</a>
       <button className={`${styles.btn} ${styles.logout}` }>Log out</button> </>: 
       <><button className={`${styles.signupbtn} ${styles.btn}`}>Sign up </button>
      <button className={`${styles.loginbtn} ${styles.btn}`}>Log in</button></> }
      <span  className={styles.menu} onClick={handleMenu}>{isOpen ? <FaTimes/> : <FaBars/>}</span>
      {isOpen ? <div className={styles.menuarea}> {isLoged ? <><div className={` ${styles.hamburgueravatar}`}></div>
      <a href="#" className={` ${styles.hamburguerusername}`}>username</a>
       <a href="#" className={styles.hamburguerlogout}>Log out</a></> : <><a href="#" className={styles.hamburguerlogin}> Log in</a>
       <a href="#" className={styles.hamburguersignup}>Sign up</a></>  }</div> : <></>}
       
       </header>
    </>
}

export default Header;