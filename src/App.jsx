import Home from './components/Home'
import Servicios from './components/Servicios'
import Formulario from './components/Formulario'
import SobreNosotros from './components/SobreNosotros'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='bg-purple-950'>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar/>
      </div>
      <Home/>
      <Servicios/>
      <SobreNosotros/>
      <Formulario/>
      <Footer/>
    </div>
  )
}

export default App
