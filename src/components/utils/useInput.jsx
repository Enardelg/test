import { useState } from 'react';
// Definimos un hook personalizado llamado useInput que maneja el estado de un campo de entrada
const useInput = (type, name, placeholder) => {
    // Utilizar el hook useState para almacenar el valor del campo de entrada
    const [value, setValue] = useState('');
    // Utilizar el hook useState para almacenar el estado de envío del campo de entrada
    const [submitted] = useState(false);
    // Función que se ejecuta cuando cambia el valor del campo de entrada
    const onChange = (e) => {
        if (!submitted) {
            setValue(e.target.value);
        }
    };
     // Devolver un objeto con las propiedades y funciones necesarias para el campo de entrada
    return {
        value,
        onChange,
        type,
        name,
        placeholder
    };
};

export default useInput;
