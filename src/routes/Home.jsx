import  { useState, useEffect, useContext } from 'react'
import Card from '../components/Card';
import { ContextGlobal } from '../components/utils/global.context';



const Home = () => {
  // Obtiene el contexto "theme" desde "ContextGlobal"
  const {theme} = useContext(ContextGlobal)
  // Declaramos el estado "data" sin valor inicial
  const [data, setData] = useState();

  async function handleFetch(){
    const response = await( // Realiza una solicitud a la API y espera la respuesta
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json()
    setData(response) // Almacena los datos en el estado "data"
  }
  
  useEffect (() => {
    handleFetch() // Ejecuta la función "handleFetch" cuando el componente se monta
  }, [])

//   useEffect(() => {
//     const fetchData = async () => {
//         axios('https://jsonplaceholder.typicode.com/users')
//         .then(res => setData(res.data))
//     }
//     fetchData()
// }, [])

// Realiza una solicitud a una API para obtener una lista de datos. Luego, muestra estos datos en forma de tarjetas utilizando el componente Card. El estilo 
// y el tema se aplican según el contexto theme.
  return (
    <main className="home" style={{background: theme.homeBackground, color: theme.color}} >
      <h1>Página principal</h1>
      <div className='card-grid'>
        {data ?. map(item =>{ // es el operador de acceso seguro en JavaScript. Se utiliza para verificar si data existe y no es null o undefined 
        //antes de llamar al método map().
        return <Card key={item.id} data={item} id={item.id} name={item.name} username={item.username}/>
      })}
      </div>
    </main>
  )
}

export default Home