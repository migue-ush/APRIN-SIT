import React from 'react';
import ImgFirst from '/public/img/redes-inform-4.jpg';
import ImgSecond from '/public/img/desarrollo-web-a-medida-4.png';

const SobreNosotros = () => {
return (
    <div className='bg-purple-900'>
        <div className='w-full container mx-auto'>
            <section className='section-about w-full bg-purple-900 grid grid-cols-3'>
                <div className='w-full grid col-span-1 place-items-center place-content-center'>
                    <h1 className='text-4xl text-white w-[70%]'>Sobre Nosotros</h1>
                    <p className='text-white text-xl w-[80%]'>Somos una empresa joven de soluciones IT que integra consultoría en informática, desarrollo de sistemas de información, diseño de soluciones, servicio de soporte técnico y asesoramiento profesional</p>        
                </div>
                <div className='grid col-span-2 place-items-center invisible sm:visible'>
                    <img src={ImgFirst} alt="redes-inform-4" className=' lg:w-[730px]  '/>
                </div>
            </section>    
            <section className='section-about w-full bg-purple-900 grid grid-cols-3'>
                <div className='grid col-span-2 place-items-center invisible sm:visible'>
                    <img src={ImgSecond}  alt="desarrollo-web-a-medida-4" className=' lg:w-[825px] '/>
                </div>
                <div className='w-full grid col-span-1 place-items-center place-content-center'>
                    <h1 className='text-4xl text-white w-[70%]'>POR QUE?</h1>
                    <p className='text-white text-xl  w-[80%]'>Somos una empresa joven de soluciones IT que integra consultoría en informática, desarrollo de sistemas de información, diseño de soluciones, servicio de soporte técnico y asesoramiento profesional</p>        
                </div>
            </section>
        </div>
    </div> 
)
}

export default SobreNosotros