import React from 'react'

const Navbar = () => {
return (
    <nav className=" opacity-100 gap-3 grid grid-cols-1 md:grid-cols-3  ">
        <ul className="pt-10 hidden xl:text-xl lg:text-lg md:text-sm md:grid md:grid-cols-4 ">
            <li><a href="#" className="text-white md:col-span-1">Home</a></li>
            <li><a href="#" className="text-white md:col-span-1">Nosotros</a></li>
            <li><a href="#" className="text-white md:col-span-1">Servicios</a></li>
            <li><a href="#" className="text-white md:col-span-1">Contactos</a></li>
        </ul>
        <img src="../img/Identidad_Aprin.png" alt="" className='w-[160px] h-[112px] mx-auto ' />
        <ul className=" hidden space-x-4 pt-10 mx-auto md:grid md:grid-cols-2 text-3xl">
            <li><a href="#" ><i className="fa-brands fa-instagram text-white" ></i></a></li>
            <li><a href="#"><i className="fa-brands fa-facebook text-white h-5 w-5"></i></a></li>
        </ul>
    </nav>
)
}

export default Navbar
