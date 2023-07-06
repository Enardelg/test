import { useContext } from 'react'
import Form from '../components/Form'
import { ContextGlobal } from '../components/utils/global.context'



const Contact = () => {
  // Obtener el tema actual del contexto global
  const {theme} = useContext(ContextGlobal)
  // El formulario incluye un título, un mensaje y el componente Form que se encarga de manejar la lógica del formulario. El estilo del componente 
  // se ajusta según el tema obtenido del contexto global. 
  return (
    <div className='contact' style={{background: theme.homeBackground, color: theme.color}}>
      <h2>¿Quieres saber más de nosotros?</h2>
      <p>Envíanos tus consultas y en breve nos pondremos en contacto contigo.</p>
      <Form/>
    </div>
  )
}

export default Contact