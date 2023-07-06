import  { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import { ContextGlobal } from '../components/utils/global.context';

const Favs = () => {
  const { theme } = useContext(ContextGlobal);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
     // Obtener los odontólogos almacenados en localStorage
    const storedDentists = JSON.parse(localStorage.getItem('dentistas'));
    if (storedDentists) {
      // Si existen odontólogos almacenados, se establecen en el estado
      setDentists(storedDentists);
    }
  }, []);

  // Función para eliminar un odontólogo de favoritos
  const removeFromFavorites = (id) => {
     // Filtrar los odontólogos y eliminar el que coincide con el ID dado
    const updatedDentists = dentists.filter((dentist) => dentist.id !== id);
      // Actualizar el estado con los odontólogos actualizados
    setDentists(updatedDentists);
     // Actualizar los odontólogos almacenados en localStorage
    localStorage.setItem('dentistas', JSON.stringify(updatedDentists));
  };
  // Renderiza una estructura condicional que muestra un mensaje si no hay odontólogos en favoritos, y muestra
  // una lista de tarjetas de odontólogos si hay odontólogos en la lista.
  return (
    <div className="favs" style={{ background: theme.homeBackground, color: theme.color }}>
      <h1>Lista de Odontólogos</h1>
      {dentists.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Oops!!  Todavía no tienes odontólogos en favoritos.</p>
      ) : (
        <div className="card-grid">
          {dentists.map((item) => (
            <Card
              name={item.name}
              username={item.username}
              key={item.id}
              id={item.id}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favs;
