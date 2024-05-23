const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-purple-950 via-purple-950 to-black font-mont" id='Footer' >
            <div className="mx-auto container">
                <div className="bg-gradient-to-b from-purple-950 via-purple-950 to-black text-white text-center pt-10 w-full h-64">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center pt-10">
                        <div className=" ml-8 md:ml-16">
                            <a href="/">
                                <img
                                    src="../img/Identidad_Aprin.png"
                                    alt="Logo"
                                    className="w-40 h-28 md:h-24 xl:h-28 hover:scale-125 duration-500"
                                />
                            </a>
                        </div>
                        <ul className="hidden  md:text-md md:grid md:grid-cols-1 ">
                            <li className="mr-4 font-bold">Secciones</li>
                            <li className="mr-4"><a href="/">Home</a></li>
                            <li className="mr-4"><a href="#Nosotros">Sobre Nosotros</a></li>
                            <li className="mr-4"><a href="#Servicios">Servicios</a></li>
                            <li className="mr-4"><a href="#Formulario">Contacto</a></li>
                        </ul>
                        <ul className="hidden md:grid md:grid-cols-1 ">
                            <li className="mr-4 md:text-xs">
                                <i className="fa-solid fa-location-dot pb-3" style={{ fontSize: "20px" }}></i> Argentina, Buenos Aires
                            </li>
                            <li className="mr-4 md:text-xs">
                                <i className="fa-solid fa-phone pt-3" style={{ fontSize: "20px" }}></i> (011) 54555573
                            </li>
                        </ul>
                        <ul className="list-none grid grid-cols-2 mx-auto md:ml-18">
                            <li className="mr-8">

                                <a href="https://www.instagram.com/aprin_sit/" target='_blank' rel="noopener noreferrer">                                
                                    <i className="fab fa-instagram hover:text-red-500 duration-500" style={{ fontSize: "35px" }}></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100095344063526" target='_blank' rel="noopener noreferrer">
                                    <i className="fab fa-facebook hover:text-blue-500 duration-500" style={{ fontSize: "35px" }}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center  pt-6 text-md lg:text-xl">
                        ® Derechos reservados por <strong> APRIN </strong> Solution IT
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
