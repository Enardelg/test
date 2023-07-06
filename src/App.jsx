import Home from "./routes/Home"
import Contact from './routes/Contact'
import Favs from './routes/Favs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Detail from './routes/Detail'
import { Route, Routes } from 'react-router-dom'
import { ContextProvider } from './components/utils/global.context'
import './App.css'

function App() {
  return (
    <div className="App ">
      <ContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<Detail/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/favs' element={<Favs/>}/>
        </Routes>
        <Footer/>
      </ContextProvider>
    </div>
  )
}

export default App