import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../images/logoOdonto.jpeg";
import { ContextGlobal } from "./utils/global.context";
import swal from 'sweetalert';

//El componente Card muestra la información de un dentista y permite agregarlo o quitarlo de los favoritos, utilizando el almacenamiento local y la biblioteca sweetalert 
//para mostrar mensajes interactivos al usuario.

const Card = ({ name, username, id, removeFromFavorites }) => {
  const { theme } = useContext(ContextGlobal);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
     // Se recupera la lista de dentistas almacenada en el localStorage
    const dentists = JSON.parse(localStorage.getItem("dentistas") || '[]');
    const existingDentist = dentists.find((d) => d.id === id);

    // Se verifica si existe un dentista con el mismo ID que el actual
    if (existingDentist) {
      setButtonClicked(true);
    // Si no se encuentra un dentista con el mismo ID, se establece el estado buttonClicked en false
    } else {
      setButtonClicked(false);
    }
  }, [id]);

  const dentist = {
    id,
    name,
    username
  };

  const addFav = () => {
    const dentists = JSON.parse(localStorage.getItem("dentistas") || '[]');
    const existingDentist = dentists.find((d) => d.id === dentist.id);

    if (existingDentist) {
      // Si existe un dentista con el mismo ID, se muestra un mensaje de confirmación utilizando sweetalert
      swal({
        title: `¿Quieres quitar a ${existingDentist.name} de tus favoritos?`,
        text: `Podrás agregar a ${existingDentist.name} nuevamente cuando desees.`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        // Si el usuario confirma, se elimina el dentista de la lista de favoritos
        if (willDelete) {
          const updatedDentists = dentists.filter((d) => d.id !== existingDentist.id);
          localStorage.setItem("dentistas", JSON.stringify(updatedDentists));
            // Se muestra un mensaje de éxito utilizando sweetalert
          swal(`¡Poof! ${existingDentist.name} ya no está entre tus favoritos`, {
            icon: "success",
          });
            // Se actualiza el estado buttonClicked a false
          setButtonClicked(false);
            // Se llama a la función removeFromFavorites pasando el ID del dentista removido
          removeFromFavorites(existingDentist.id);
        } else {
            // Si el usuario cancela, se muestra un mensaje de error utilizando sweetalert
          swal({
            text: `Operación cancelada`,
            icon: "error",
            button: "Entendido",
          });
        }
      });
    } else {
        // Si no existe un dentista con el mismo ID, se agrega el dentista a la lista de favoritos
      dentists.push(dentist);
      localStorage.setItem("dentistas", JSON.stringify(dentists));
       // Se muestra un mensaje de éxito utilizando sweetalert
      swal({
        title: "¡Excelente elección!",
        text: `${dentist.name} fue agregado a favoritos`,
        icon: "success",
        button: "Excelente",
      });
      console.log('¡Felicidades!', `Dentista con ID ${dentist.id} agregado exitosamente`);
      console.log(dentists);
       // Se actualiza el estado buttonClicked a true
      setButtonClicked(true);
    }
  };


  // El componente Card muestra una tarjeta con información de un dentista. Incluye su nombre, nombre de usuario y una imagen. También tiene un botón de favoritos 
  // representado por una estrella. El fondo de la tarjeta se ajusta según el tema actual del contexto. Al hacer clic en el botón de favoritos, se agrega o quita al dentista
 // de la lista de favoritos. El componente se exporta como el componente por defecto del archivo.
  return (
    <div className="card" style={{ background: theme.cardBackground }}>
      <div className="perfil">
        <img src={img} alt="image_doctor" />
      </div>
      <h2><Link to={`/${id}`}>{name}</Link></h2>
      <h3>Usuario: {username}</h3>
      <button
        onClick={addFav}
        className={`favButton ${buttonClicked ? 'active' : ''}`}
        style={{
          background: buttonClicked ? theme.buttomActive : theme.buttom,
        }}
      >
        🌟
      </button>
    </div>
  );
};

export default Card;
