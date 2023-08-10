import ImgPlanta from '/public/img/Frame-planta.png';
import ImgServicios from '/public/img/servicio.jpg';

const Servicios = () => {
    return (
      <div className="mx-auto p-4 bg-purple-900">
        
        <h1 className="text-4xl font-bold text-white bg-purple-900 text-center p-4 mb-4">SERVICIOS</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-purple-900 p-4 text-white text-center">
            
          <iconify-icon icon="ph:pen-nib-light" width="70" style={{color:'#BA55D3'}}></iconify-icon>
            <h2 className="text-xl font-bold mt-8">Diseño Web</h2>
            <p className="text-justify mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae maxime molestiae eaque minus architecto, necessitatibus omnis porro hic enim sequi inventore asperiores, voluptas voluptates placeat sit aspernatur doloribus expedita.</p>
          </div>
          <div className="bg-purple-900 p-4 text-white text-center">
            
          <iconify-icon icon="emojione-monotone:page-facing-up" width="70" style={{color:'#BA55D3'}}></iconify-icon>
            <h2 className="text-xl text-center font-bold mt-8">Desarrollo</h2>
            <p className="text-justify mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae maxime molestiae eaque minus architecto, necessitatibus omnis porro hic enim sequi inventore asperiores, voluptas voluptates placeat sit aspernatur doloribus expedita.</p>
          </div>

          <div className="bg-purple-900 p-4 text-white text-center">

          <iconify-icon icon="iconoir:wrench" width="70" style={{color:'#BA55D3'}}></iconify-icon>
            <h2 className="text-xl text-center font-bold mt-8">Mantenimiento</h2>
            <p className="text-justify mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae maxime molestiae eaque minus architecto, necessitatibus omnis porro hic enim sequi inventore asperiores, voluptas voluptates placeat sit aspernatur doloribus expedita.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-28">
          <div>
            <img src={ImgPlanta} alt="img-planta" width='200' height='260' className="col-span-1 ml-16"/>
          </div>
    
          <div className="col-span-3">
            <img src={ImgServicios} alt="img-servicios" width='548' height='164' className='mx-auto md:ml-20 mt-20'/>
          </div>

        </div>
      </div>
    );
  };


  
  export default Servicios;
