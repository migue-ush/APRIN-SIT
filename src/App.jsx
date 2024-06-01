import Home from './components/Home'
import Servicios from './components/Servicios'
import Formulario from './components/Formulario'
import SobreNosotros from './components/SobreNosotros'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import useValidar from './hook/useValidar'


function App() {
  const {
    validationErrors,
    setValidationErrors,
    form,
    sendEmail

  } = useValidar()

  return (
    <div className='bg-purple-950'>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar />
      </div>

      <Home />
      <Servicios />
      <Carrousel />
      <Formulario
        validationErrors={validationErrors}
        setValidationErrors={setValidationErrors}
        form={form}
        sendEmail={sendEmail}
      />

      <SobreNosotros />
      <Footer />
    </div>
  )
}

export default App
