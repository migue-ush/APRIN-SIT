import React from "react";

const servicesData = [
  {
    icon: "ph:pen-nib-light",
    title: "Diseño Web",
    description:
      "Diseñamos la apariencia visual y la experiencia del usuario en un sitio web o aplicación. Utilizamos una variedad de herramientas y técnicas para crear diseños atractivos y funcionales que mejoren la experiencia del usuario, refuercen la marca y la identidad visual de una empresa o individuo.",
    image:"/img/Web-Designing-Important-for-Your-Business.jpg",
  },
  {
    icon: "emojione-monotone:page-facing-up",
    title: "Desarrollo",
    description:
      "Creamos sitios web simples con contenido estático hasta el desarrollo de aplicaciones web complejas con funcionalidades avanzadas. Este servicio es esencial para cualquier empresa o individuo que desee tener una presencia en línea efectiva y profesional.",
      image:"/img/iStock-629285904-e1515424561997.jpg",
  },
  {
    icon: "iconoir:wrench",
    title: "Mantenimiento",
    description:
      "Actualizamos y mantenemos de forma regular tu sitio web o aplicación para garantizar su correcto funcionamiento y seguridad. Mejoramos el rendimiento e implementamos medidas de seguridad para mantener tu sitio en óptimas condiciones.",
      image:"/img/computer-repair-service.jpg",
  },
];

const CardService = () => {
  return (
    <>
      {servicesData.map((service, index) => (
        <div key={index} className="bg-purple-900 p-4 2xl:w-3/4 2xl:p-14 2xl:m-auto 2xl:h-[55vh] border-purple-400 border-2 rounded-2xl text-white text-center">
          <div className="absolute">
            {/* <img className="relative bottom-14 rounded-t-2xl right-14" src={service.image} width={364} alt=""/> */}
          </div>
          <div>
            <div className="">
              <iconify-icon
                icon={service.icon}
                width="70"
                style={{ color: "#ffffff" }}
              ></iconify-icon>
            </div>
            <h2 className="text-2xl font-bold mt-8 ">{service.title}</h2>
            <div>
              <p className="mt-10 ">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};


export default CardService;
