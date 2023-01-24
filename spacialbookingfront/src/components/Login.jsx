import React from "react";
import {Link, Redirect} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(){
    const validationData = {
        email: "yuri.bermudez@turia-group.com",
        password: "DigitalHouse2"
    }

    // Creación de estados por cada input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // Manejadores de eventos para cada input para actualziar los estados a medida que el usurio escribe en los inputs
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);


    // Funcion para validar campos del Login
    function validateLogin(){
        if(email===validationData.email && password===validationData.password){
            return true;
        }else{
            return false;
        }
    }

    // Manejador del evento del envío de formulario
    const onSubmitLogin = (e) =>{
        e.preventDefault();
        const isCorrectLogin = validateLogin();
        if(isCorrectLogin){
            setEmail("");
            setPassword("");
            alert("Login exitoso")
            // El alert no va, es para indicar qque falta redireccionarlo al Home y cambiar el estado is Logged del Header
        }else{
            alert("Error credenciales inválidas. Por favor valide los campos ingresados")
        }
    }







    return (
        <>
        <div>
            {/* Agregar funcionalidad para redireccionar al home o pagina principal usando
            la etiqueta Link*/}
            {/* <Link to='/home'> */}
            <button>X</button>
            {/* </Link> */}
        </div>
        <form onSubmit={onSubmitLogin}>
        <h2>Iniciar sesión</h2>
        <div>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" id="email" placeholder="Ingresa el correo electrónico" value={email} onChange={onChangeEmail}></input>
        </div>
        <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" value={password} onChange={onChangePassword}></input>
        </div>
        <button type="submit" >Ingresar</button>
        <p>¿Aún no tines cuenta? <Link to='/signup'>Regístrate</Link></p>
        </form>
        
        </>
        
    )
}

export default Login;