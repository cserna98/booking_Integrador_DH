import React, { useState, useEffect } from "react";
import styles from "./Header.module.css"
import logo from "../../assets/img/ovniricLogoLight.png";
import lema from "../../assets/img/ovniricLemaLight.png"
import {FaBars,FaTimes} from "react-icons/fa"
import { GlobalContext } from "../globalState/GlobalState";
import { Link } from "react-router-dom"
import '../../stylesVariables/variables.css'

const Header = ({changeTheme}) => {

  const {renderForm,setRenderForm,isLoged,setLogin, user,role, setRole}= GlobalContext();

  const [isOpen,setOpen] = useState(false);
  const [rolAdmin, setRolAdmin] = useState(true)
 

  

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
    console.log("se elimino tl token " + localStorage.getItem('token'))
    try {
      const response = await fetch("http://18.220.89.28:8080/api/v1/auth/logout", {
        method: 'POST',
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 204) {
        // Logout successful, remove token from local storage and redirect to login page
        localStorage.removeItem('token');
        localStorage.removeItem('RoleUser');
        setRole("")
        
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error(error);
    }
  
  }  




  useEffect(()=>{
    console.log(role)
  },[role])
  
  useEffect(()=>{
    let name = user.firstname ;
    console.log(name)
  },[isLoged])
  
  console.log(user)

 
    return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} onClick={handleLogo}><img  className={styles.logo} src={logo} alt="Logo Ovniric" /></Link>
      <Link to="/" className={styles.lema} onClick={handleLogo}><img  className={styles.lema} src={lema} alt="Lema Ovniric" /></Link>
      <button onClick={changeTheme}>theme</button>
      {isLoged ? 
          <div className={styles.login}>
              <div className={styles.avtContainer}>
                <span className={styles.avtSpan}>
                  {`${user.firstname} ${user.lastname}`.split(" ").reduce(( accum,current) => {return accum + current[0].toUpperCase() + "."},"")}
                </span>
              </div>
              <a href="#" className={styles.username}>{`Hola ${user.firstname}`}</a>
              {role == "ADMIN" ? (
              <Link to='/administrationProducts' className={styles.add}>
                <button className={styles.btn} id={styles.btnAdd}>+ Producto</button>
              </Link>
            ): role == "USER" ? (
              <Link to='/MisReservas' className={styles.add}>
                <button className={styles.btn} id={styles.btnAdd}>Mis reservas</button>
              </Link>): null}
              <button className={`${styles.btn} ${styles.logout}` } id={styles.logout} onClick={logout} >Log out</button>          
          </div> : 
        <div className={styles.login}>
          <Link to="/signup"  className={`${styles.loginbtn}` }>
            <button className={` ${styles.btn} ${renderForm == "SignUp" ? styles.Disp_none : "" }`} onClick={handleSingUp}>Sign up </button>
          </Link>
          <Link to="/login" className={`${styles.signupbtn} `}>
            <button className={` ${styles.btn} ${renderForm == "LogIn" ? styles.Disp_none : "" } `}  onClick={handleLogIn}>Log in</button>
          </Link>
        </div> 
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
    )
   
}

export default Header;