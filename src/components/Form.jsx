import { useState } from "react";
import useInput from './utils/useInput';
import swal from 'sweetalert';

// Expresiones regulares para validar el correo electrónico y el nombre
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validName = /^.{5,}$/;

const Form = () => {
  // Utilizamos el hook useInput para gestionar los campos de nombre y correo electrónico
  const name = useInput('text', 'name', 'Ingrese nombre');
  const email = useInput('email', 'email', 'Ingrese email');
  const [msg, setMsg] = useState('');

  const onSubmit= (e) => {
    e.preventDefault();
     // Validamos el correo electrónico y el nombre utilizando las expresiones regulares
    const isEmailValid = validEmail.test(email.value);
    const isNameValid = validName.test(name.value);
     // Verificamos si se completaron ambos campos
    if (!name.value || !email.value) {
      setMsg('Debes completar ambos campos.');
      setTimeout(() => {
        setMsg('');
      }, 3000);
      return;
    } else if (!isNameValid) {
       // Verificamos si el nombre cumple con los requisitos (solo letras y mínimo 5 caracteres)
      setMsg('Solo puedes ingresar letras, con un mínimo de 5 dígitos.');
      setTimeout(() => {
        setMsg('');
      }, 3000);
      return;
       // Verificamos si el correo electrónico es válido
    } else if (!isEmailValid) {
      setMsg('Debes ingresar un correo electrónico válido.');
      setTimeout(() => {
        setMsg('');
      }, 3000);
      return;
    } else {
      // Si todas las validaciones pasan, mostramos un mensaje de éxito utilizando SweetAlert
      setMsg('');
      swal({
        title: '¡¡Excelente!!',
        text: `${name.value} tu correo electrónico fue enviado correctamente a ${email.value}, a la brevedad nuestro equipo se contactará contigo.`,
        icon: 'success',
        button: 'Muchas Gracias',
      });
      console.log("Confirmación de envío.");
    }
  };
  
  // El retorno del componente Form renderiza un formulario donde los usuarios pueden ingresar su nombre y correo electrónico, y se realizan validaciones 
  // en tiempo real para garantizar que los campos estén completos y sean válidos antes de enviar los datos.
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <h2>Completa tus datos en este formulario:</h2>
        <input {...name} />
        <input {...email} />
        <input className="submit" type="submit" value="Enviar" />
        {msg && <p className="error">{msg}</p>}
      </form>
    </div>
  );
};

export default Form;
