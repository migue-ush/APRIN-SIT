import React, { useState, MouseEvent, useCallback } from 'react';

const CardService = ({ icon, title, description, image }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 10; // Ajuste aquí para la sensibilidad de la inclinación en el eje X
      const rotateY = (centerX - x) / 10; // Ajuste aquí para la sensibilidad de la inclinación en el eje Y

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  function throttle(func, delay) {
    let lastCall = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    };
  }

  return (
    <div
      className="bg-purple-900 p-4 border-purple-400 border-2 rounded-2xl text-white text-center relative"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: 'all 400ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s', // Ajuste aquí para la suavidad de la transición
      }}
    >
      <div className="absolute">
        {/* <img className="relative bottom-14 rounded-t-2xl right-14" src={image} width={364} alt=""/> */}
      </div>
      <div>
        <div className="">
          <iconify-icon
            icon={icon}
            width="70"
            style={{ color: "#ffffff" }}
          ></iconify-icon>
        </div>
        <h2 className="text-2xl font-bold mt-8 ">{title}</h2>
        <div>
          <p className="mt-10 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardService;
