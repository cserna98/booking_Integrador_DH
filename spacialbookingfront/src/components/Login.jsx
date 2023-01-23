import React from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import validateLogin from "../utils/validateLogin";

function Login(){
    const isCorrect = false;
    return (
        <>
        <div>
            {/* Agregar funcionalidad para redireccionar al home o pagina principal usando
            la etiqueta Link*/}
            {/* <Link to='/home'> */}
            <button>X</button>
            {/* </Link> */}
        </div>
        <form>
        <h2>Iniciar sesión</h2>
        <div>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" id="email" placeholder="Ingresa el correo electrónico"></input>
        </div>
        <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña"></input>
        </div>
        <button type="submit" onClick={validateLogin}>Ingresar</button>
        <p>¿Aún no tines cuenta? <Link to='/signup'>Regístrate</Link></p>
        </form>
        {isCorrect?<p>Revisa la información</p>:undefined}
        </>
        
    )
}

export default Login;