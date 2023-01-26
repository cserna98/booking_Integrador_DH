import React from "react";
import {Link, Redirect} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from './Login.module.css'
import { GlobalContext } from "../globalState/GlobalState";




function Login(){

    const validationData = {
        email: "yuri.bermudez@turia-group.com",
        password: "DigitalHouse2"
    }

    const {renderForm,setRenderForm,isLoged,email,setEmail,setPassword,password,setLogin}= GlobalContext()



    // Manejadores de eventos para cada input para actualziar los estados a medida que el usurio escribe en los inputs
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);


    // Funcion para validar campos del Login
    function validateLogin(){
        if(email===email && password===password){
            return true;
        }else{
            return false;
        }
    }

    // Manejador del evento del envío de formulario
    const onSubmitLogin = (e) =>{
        e.preventDefault();
        console.log(email)
        const isCorrectLogin = validateLogin();
        if(isCorrectLogin){
            setEmail("");
            setPassword("");
            setLogin(true)
        }else{
            alert("Error credenciales inválidas. Por favor valide los campos ingresados")
        }
        

    }







    return (
        <div className={styles.loginTemplate}>
        <div className={styles.buttonClosed}>
            {/* Agregar funcionalidad para redireccionar al home o pagina principal usando
            la etiqueta Link*/}
            {/* <Link to='/home'> */}
            <Link to="/" >
                <button >X</button>
            </Link>
            {/* </Link> */}
        </div>
        <form onSubmit={onSubmitLogin} className={styles.form}>
        <h2>Iniciar sesión</h2>
        <div>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" id="email" placeholder="Ingresa el correo electrónico" value={email} onChange={onChangeEmail}></input>
        </div>
        <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" value={password} onChange={onChangePassword}></input>
        </div>
        <button type="submit" className={styles.buttonLogin}  >Ingresar</button>
        <p>¿Aún no tienes cuenta? <Link to='/signup'>Regístrate</Link></p>
        </form>
        
        </div>
        
    )
}

export default Login;