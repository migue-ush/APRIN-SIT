import React from 'react'
import CardService from "./CardService";
import ImgQwertty from "/img/qwertty.png";

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
          <CardService />
        </div>
      </div>
    </div>
  );
};

export default Servicios;
