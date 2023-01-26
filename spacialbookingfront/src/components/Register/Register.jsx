import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from './Register.module.css';
import { GlobalContext } from "../globalState/GlobalState";

function Register(){
    // Creación de los estados
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");    
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email1, setEmail1] = useState("");
    const [password1, setPassword1] = useState("");


    // Variables estado global 
    const {email,setEmail,password,setPassword}= GlobalContext()

    // Manejadores de eventos para cada input para actualziar los estados a medida que el usurio escribe en los inputs
    const onChangeName = (e) => setName(e.target.value);
    const onChangeLastName = (e) => setLastName(e.target.value);
    const onChangeEmail = (e) => setEmail1(e.target.value);
    const onChangePassword = (e) => setPassword1(e.target.value);
    const onChangePasswordConfirm = (e) => setPasswordConfirm(e.target.value);

    // Expresiones regulares para validar los inputs
    const validations = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,100}$/, // Letras y espacios, pueden llevar acentos.
        lastName: /^[a-zA-ZÀ-ÿ\s]{1,100}$/, // Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{7,1000}$/, // 7 a 1000 digitos.
    }

    // Función para validación de los inputs
    function validateInputs (){
        if(validations.name.test(name) && validations.lastName.test(lastName) && validations.email.test(email1) 
        && validations.password.test(password1) && password1 ===passwordConfirm){
            return true;
        } else{
            return false;
        }
    }

    // Manejador del evento del envío de formulario
    const onSubmitForm = (e) =>{
        e.preventDefault();
        const isCorrectForm = validateInputs();
        if(isCorrectForm){
            setName("");
            setLastName("");
            setEmail(e.target.value);
            setEmail1("");
            setPassword(e.target.value);
            setPassword1("");
            setPasswordConfirm("");           
            alert("Registro exitoso")
        }else{
            alert("Error. Verifica los campos ingresados")
        }
    }


    return (
        <div className={styles.registerTemplate}>
            <div className={styles.buttonClosed}>
            {/* Agregar funcionalidad para redireccionar al home o pagina principal usando
            la etiqueta Link*/}
            {/* <Link to='/home'> */}
                <Link to="/">
                    <button >X</button>
                </Link>
            {/* </Link> */}
            </div>
        <form id="register" onSubmit={onSubmitForm} className={styles.form}>
        <h2>Crear cuenta</h2>
        <div className={styles.fullName}>
        <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre" value={name} onChange={onChangeName}></input>
        </div>
        <div>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" name="apellido" id="apellido" placeholder="Apellido" value={lastName} onChange={onChangeLastName}></input>
        </div>
        </div>
        <div>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" id="email" placeholder="Ingresa el correo electrónico" value={email1} onChange={onChangeEmail}></input>
        </div>
        <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" value={password1} onChange={onChangePassword}></input>
        </div>
        <div>
        <label htmlFor="passwordConfirm">Confirmar contraseña</label>
        <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Ingresa tu contraseña" value={passwordConfirm} onChange={onChangePasswordConfirm}></input> 
        </div>
        <button type="submit" className={styles.buttonSignup}>Crear cuenta</button>
        <p>¿Ya tienes una cuenta? <Link to='/login'>Iniciar sesión</Link></p>
        </form>
        </div>
    )
}

export default Register;