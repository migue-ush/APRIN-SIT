import { useState } from 'react'
import { Menu, X } from 'lucide-react'



const NavLinks = () => {
    return (
        <>
            <ul className="ml-5 pl-5 underline-offset-8 md:pt-12 w-[60%] md:w-[100%] md:pl-0 bg-purple-900 opacity-70 rounded-xl md:bg-transparent gap-x-14 xl:text-xl lg:text-lg md:text-sm md:grid md:grid-cols-4 ">
                <li className='text-lg md:text-sm lg:text-lg font-bold pb-5 text-center pt-5 md:pt-0 md:font-normal md:pb-0 md:pl-4'><a href="/" className="text-white md:col-span-1 ">Home</a></li>
                <li className='text-lg md:text-sm lg:text-lg font-bold pb-5 text-center md:font-normal md:pb-0'><a href="#Nosotros" className="text-white md:col-span-1 ">Nosotros</a></li>
                <li className='text-lg md:text-sm lg:text-lg font-bold pb-5 text-center md:font-normal md:pb-0'><a href="#Servicios" className="text-white md:col-span-1">Servicios</a></li>
                <li className='text-lg md:text-sm lg:text-lg font-bold pb-5 text-center md:font-normal md:pb-0'><a href="#Formulario" className="text-white md:col-span-1">Contactos</a></li>
            </ul>
        </>
    )
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

return (
    <>
        <nav className=" opacity-100 gap-3 grid  md:grid-cols-3  ">
            <div className='hidden md:grid'>
                <NavLinks/>
            </div>
            <a href="/"><img src="../img/Identidad_Aprin.png" alt="" className='w-[160px] h-[112px] mx-auto ' /></a>
            <ul className=" hidden space-x-4 pt-10 mx-auto md:grid md:grid-cols-2 text-3xl">
                <li><a href="https://www.instagram.com/aprin_sit/"target='_blank'><i className="fa-brands fa-instagram text-white" ></i></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100095344063526" target='_blank'><i className="fa-brands fa-facebook text-white h-5 w-5"></i></a></li>
            </ul>
            <div className="space-y-2 grid pt-14 pl-5 sm:pl-10 absolute md:hidden">
                <button onClick={toggleNavbar}>
                    {isOpen ? <X color="red"/> : <Menu color='white'/>}
                </button>
            </div>
        </nav>
        {isOpen && (
            <div>
                <NavLinks/>
            </div>
        )}
    </>
)
}

export default Navbar
