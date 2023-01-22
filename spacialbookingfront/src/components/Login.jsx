import React from "react";
import {Link} from 'react-router-dom';

function Login(props){
    const {title} = props;
    return (
        <>
        <div>
            <Link to='/signup'>
            <button>X</button>
            </Link>
        </div>
        <form>
        <h2>{title}</h2>
        <label for="email">Correo electrónico</label>
        <input type="email" name="email" id="email" placeholder="Ingresa el correo electrónico"></input>
        <label for="password">Contraseña</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña"></input>
        <button type="submit">Ingresar</button>
        </form>
        </>
        
    )
}

export default Login;