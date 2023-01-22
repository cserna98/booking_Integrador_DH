import React from "react";
import Button from "../Button";

function Login(props){
    const {title} = props;
    return (
        <form>
        <h2>{title}</h2>
        <label for="email">Correo electrónico</label>
        <input type="email" name="email" id="email" placeholder="Ingresa el correo electrónico"></input>
        <label for="password">Contraseña</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña"></input>
        <Button text={'Ingresar'}></Button>
        </form>
    )
}

export default Login;