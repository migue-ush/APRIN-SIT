import React, { useState } from 'react';
import ImgPlanta from '/public/img/Frame-planta.png';
import ImgServicios from '/public/img/servicio.jpg';


const Servicios = () => {
  const [showDesignText, setShowDesignText] = useState(true);
  return (

    <div className='bg-purple-950' id='Servicios'>
      <div className="absolute h-full w-full bg-[url('./img/qwertty.png')] bg-cover bg-center " />
      <div className="mx-auto p-4 bg-purple-950 container">

        <h1 className="text-4xl lg:text-5xl font-bold text-white bg-purple-950 text-center p-4 mb-4">SERVICIOS</h1>

        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-purple-950 p-4 text-white text-center">
            <div className="">
              <iconify-icon icon="ph:pen-nib-light" width="70" style={{ color: '#BA55D3' }}></iconify-icon>
            </div>

            <h2 className="text-2xl font-bold mt-8">Diseño Web</h2>
            <div>
              {showDesignText && (
                <p className="text-justify mt-10">Diseñamos la apariencia visual y la experiencia del usuario en un sitio web o aplicación web. Utilizamos una variedad de herramientas y técnicas para crear diseños atractivos y funcionales que mejoren la experiencia del usuario y refuercen la marca y la identidad visual de una empresa o individuo.</p>
              )}
            </div>
          </div>
          <div className="bg-purple-950 p-4 text-white text-center">
            <div className="">
              <iconify-icon icon="emojione-monotone:page-facing-up" width="70" style={{ color: '#BA55D3' }}></iconify-icon>
            </div>
            <h2 className="text-2xl text-center font-bold mt-8">Desarrollo</h2>
            <p className="text-justify mt-10">Creamos sitios web simples con contenido estático hasta el desarrollo de aplicaciones web complejas con funcionalidades avanzadas. Este servicio es esencial para cualquier empresa o individuo que desee tener una presencia en línea efectiva y profesional.</p>
          </div>

          <div className="bg-purple-950 p-4 text-white text-center">
            <div className="">
              <iconify-icon icon="iconoir:wrench" width="70" style={{ color: '#BA55D3' }}></iconify-icon>
            </div>
            <h2 className="text-2xl text-center font-bold mt-8">Mantenimiento</h2>
            <p className="text-justify mt-10">Actualizamos y mantenemos de forma regular tu sitio web o aplicación web para garantizar su correcto funcionamiento y seguridad. Mejoramos el rendimiento e implementamos de medidas de seguridad para mantener el sitio web en óptimas condiciones.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-28 justify-items-center ">
          <div>
            <img src={ImgPlanta} alt="img-planta" width='200' height='260' className="lg:col-span-1 " />
          </div>

          <div className="col-span-3 grid place-items-center" >
            <img src={ImgServicios} alt="img-servicios" className='md:ml-20 mt-20 w-[90%] hidden md:grid' />
          </div> 

        </div>
      </div>
    </div>
  );
};



export default Servicios;