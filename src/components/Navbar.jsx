import React from 'react'

const Navbar = () => {
return (
    <nav className=" opacity-100 gap-3 grid  md:grid-cols-3  ">
        <ul className="pt-12 pl-5 gap-x-14 hidden xl:text-xl lg:text-lg md:text-sm md:grid md:grid-cols-4 ">
            <li className=''><a href="/" className="text-white md:col-span-1 ">Home</a></li>
            <li className=''><a href="#Nosotros" className="text-white md:col-span-1 ">Nosotros</a></li>
            <li className=''><a href="#Servicios" className="text-white md:col-span-1">Servicios</a></li>
            <li className=''><a href="#Footer" className="text-white md:col-span-1">Contactos</a></li>
        </ul>
        <a href="/"><img src="../img/Identidad_Aprin.png" alt="" className='w-[160px] h-[112px] mx-auto ' /></a>
        <ul className=" hidden space-x-4 pt-10 mx-auto md:grid md:grid-cols-2 text-3xl">
            <li><a href="https://www.instagram.com/aprin_sit/"target='_blank'><i className="fa-brands fa-instagram text-white" ></i></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100095344063526" target='_blank'><i className="fa-brands fa-facebook text-white h-5 w-5"></i></a></li>
        </ul>
        <div className="space-y-2 grid pt-14 pl-5 sm:pl-10 absolute md:hidden">
            <div className="w-8 h-0.5 bg-gray-100"></div>
            <div className="w-8 h-0.5 bg-gray-100"></div>
            <div className="w-8 h-0.5 bg-gray-100"></div>
        </div>
    </nav>
)
}

export default Navbar
