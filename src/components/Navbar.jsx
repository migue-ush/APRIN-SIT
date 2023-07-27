import React from 'react'

const Navbar = () => {
return (
    <nav className="flex  absolute items-center justify-around">
    <ul className="flex space-x-4">
        <li><a href="#" className="text-white">Home</a></li>
        <li><a href="#" className="text-white">Sobre nosotros</a></li>
        <li><a href="#" className="text-white">Servicios</a></li>
        <li><a href="#" className="text-white">Contactos</a></li>
    </ul>
    <img src="../public/img/Identidad_Aprin.png" alt="" className='w-25 h-20' />
    <ul className="flex space-x-4">
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
    </ul>
</nav>
)
}

export default Navbar
