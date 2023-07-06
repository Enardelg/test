import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import facebook from '../images/ico-facebook.png';
import instagram from '../images/ico-instagram.png';
import wpp from '../images/ico-whatsapp.png';
import tiktok from '../images/ico-tiktok.png';


const Footer = () => {
  // Obtenemos el tema actual del contexto
  const { theme } = useContext(ContextGlobal);


  return (
     // Renderizamos el pie de página con la clase "footer" y estilos de fondo y color según el tema
    <footer className="footer" style={{ background: theme.footBackground, color: theme.color }}>
      <div className="logo">
        <p>Final Front III © todos los derechos reservados a Enrique Delgado - 2023 </p>
      </div>
      <div className="divRedes">
        <a href="https://www.facebook.com/"> <img className="redes" src={facebook} alt="ico-fb" /> </a>
        <a href="https://www.instagram.com/"> <img className="redes" src={instagram} alt="ico-ig" /> </a>
        <a href="https://www.whatsapp.com/"> <img className="redes" src={wpp} alt="ico-wpp" /> </a>
        <a href="https://www.tiktok.com/"> <img className="redes" src={tiktok} alt="ico-tk" /> </a>
      </div>
    </footer>
  );
};

export default Footer;
