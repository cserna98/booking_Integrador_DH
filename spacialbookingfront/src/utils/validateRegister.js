// Expresiones regulares para las validaciones de los campos
const validations = {
    name:/^[a-zA-ZÀ-ÿ\s]{1,100}$/,
    lastName:/^[a-zA-ZÀ-ÿ\s]{1,100}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const correctInputs ={
    name:false,
    lastName:false,
    email:false,
    password:false
}

const inputs = document.querySelectorAll('#register input')

function validateRegister(e){
    e.preventDefault()
    inputs.forEach(input)

    
}

export default validateRegister;