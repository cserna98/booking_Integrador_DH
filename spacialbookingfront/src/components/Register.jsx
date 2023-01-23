import React from "react";
import { Link } from "react-router-dom";

function Register(){
    return (
        <>
        <form>
        <h2>Crear cuenta</h2>
        <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre"></input>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" name="apellido" id="apellido" placeholder="Apellido"></input>
        </div>
        <div>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" id="email" placeholder="Ingresa el correo electrónico"></input>
        </div>
        <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña"></input>
        </div>
        <div>
        <label htmlFor="passwordConfirm">Confirmar contraseña</label>
        <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Ingresa tu contraseña"></input> 
        </div>
        <button type="submit">Crear cuenta</button>
        <p>¿Ya tienes una cuenta? <Link to='/login'>Iniciar sesión</Link></p>
        </form>
        </>
    )
}

export default Register;