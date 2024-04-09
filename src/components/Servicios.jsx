import React from 'react';
import CardService from './CardService';
import ImgQwertty from '/img/qwertty.png';

const Servicios = () => {
  return (
    <div className="bg-purple-950 font-mont pb-60" id="Servicios">
      <div
        className="absolute h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${ImgQwertty})` }}
      />
      <div className="mx-auto p-4 bg-purple-950 container">
        <h1 className=" text-4xl lg:text-5xl font-bold text-white bg-purple-950 text-center p-4 mb-4 mt-32">
          SERVICIOS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardService
            icon="ph:pen-nib-light"
            title="Diseño Web"
            description="Diseñamos la apariencia visual y la experiencia del usuario en un sitio web o aplicación. Utilizamos una variedad de herramientas y técnicas para crear diseños atractivos y funcionales que mejoren la experiencia del usuario, refuercen la marca y la identidad visual de una empresa o individuo."
            image="/img/Web-Designing-Important-for-Your-Business.jpg"
          />
          <CardService
            icon="emojione-monotone:page-facing-up"
            title="Desarrollo"
            description="Creamos sitios web simples con contenido estático hasta el desarrollo de aplicaciones web complejas con funcionalidades avanzadas. Este servicio es esencial para cualquier empresa o individuo que desee tener una presencia en línea efectiva y profesional."
            image="/img/iStock-629285904-e1515424561997.jpg"
          />
          <CardService
            icon="iconoir:wrench"
            title="Mantenimiento"
            description="Actualizamos y mantenemos de forma regular tu sitio web o aplicación para garantizar su correcto funcionamiento y seguridad. Mejoramos el rendimiento e implementamos medidas de seguridad para mantener tu sitio en óptimas condiciones."
            image="/img/computer-repair-service.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Servicios;
