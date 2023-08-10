const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-purple-900 via-purple-900 to-black text-white text-center pt-24 w-full h-96">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                <div className=" ml-8 md:ml-16">
                    <img
                        src="../public/img/Identidad_Aprin.png"
                        alt="Logo"
                        className="w-40 h-28"
                    />
                </div>
                <ul className="hidden text-2xl md:grid md:grid-cols-1 ">
                    <li className="mr-4 font-bold">Secciones</li>
                    <li className="mr-4">Home</li>
                    <li className="mr-4">Sobre Nosotros</li>
                    <li className="mr-4">Servicios</li>
                    <li className="mr-4">Contacto</li>
                </ul>
                <ul className="hidden md:grid md:grid-cols-1 ">
                    <li className="mr-4">
                        <i className="fa-solid fa-location-dot pb-3" style={{ fontSize: "20px" }}></i> Argentina, Buenos Aires
                    </li>
                    <li className="mr-4">
                        <i className="fa-solid fa-phone pt-3" style={{ fontSize: "20px" }}></i> (011) 54555573
                    </li>
                </ul>
                <ul className="list-none grid grid-cols-2 mx-auto md:ml-18">
                    <li className="mr-8">
                        <a href="https://www.instagram.com/aprin_sit/">
                            <i className="fab fa-instagram" style={{ fontSize: "35px" }}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100095344063526">
                            <i className="fab fa-facebook" style={{ fontSize: "35px" }}></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-center mt-14 text-xl">
                ® Derechos reservados por <strong> APRIN </strong> Solution IT
            </div>
        </footer>
    );
};

export default Footer;

