import React from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Login(props){
    const {title} = props;
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
        <h2>{title}</h2>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" id="email" placeholder="Ingresa el correo electrónico"></input>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña"></input>
        <button type="submit">Ingresar</button>
        <p>¿Aún no tines cuenta? <Link to='/signup'>Regístrate</Link></p>
        </form>
        </>
        
    )
}

export default Login;