import  { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import modoClaro from '../images/modo_claro-removebg-preview.png';
import modoOscuro from '../images/modo_oscuro-removebg-preview.png';

const Navbar = () => {
   // Obtener el tema y la función para cambiar el tema del contexto global
  const { theme, handleTheme } = useContext(ContextGlobal);
   // Estado para controlar la imagen de cambio de modo
  const [cambiarModoImg, setCambiarModoImg] = useState(modoClaro);
   // Manejar el clic en el botón de cambio de modo
  const handleClick = () => {
     // Cambiar la imagen del modo según la imagen actual
    if (cambiarModoImg === modoClaro) {
      setCambiarModoImg(modoOscuro);
    } else {
      setCambiarModoImg(modoClaro);
    }
     // Llamar a la función para cambiar el tema
    handleTheme();
  };
  // El componente Navbar retorna una barra de navegación que consiste en un logotipo enlazado al inicio, opciones de navegación para 
  // diferentes páginas, y un botón de cambio de modo. El estilo de la barra de navegación se adapta al tema actual. 
  // Al hacer clic en el botón de cambio de modo, se activa una función que cambia el tema y actualiza la imagen correspondiente al modo actual. En general, el 
  // componente proporciona una interfaz de navegación coherente y la capacidad de cambiar el tema de la aplicación.
  return (
    <nav className="nav" style={{ background: theme.navBackground }}>
      <Link to={'/'}>
        <h2 className='icono' style={{ color: theme.color }}><span>D</span>H Clínica Odontológica</h2>
      </Link>
      <div className='divNav'>
        <Link className='link' to={'/'} style={{ color: theme.color, background: theme.linkBackground}}>Home</Link>
        <Link className='link' to={'/contact'} style={{ color: theme.color, background: theme.linkBackground }}>Contacto</Link>
        <Link className='link' to={'/favs'} style={{ color: theme.color, background: theme.linkBackground}}>Favoritos</Link>
      </div>
      <div className='cambiar'>
        <button className='change' onClick={handleClick}>
          <img className='cambiarModo' src={cambiarModoImg} alt="Modo-claro" />
          <p className='change-p'>Cambiar tema</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
