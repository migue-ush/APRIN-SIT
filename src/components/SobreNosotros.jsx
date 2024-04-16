import React from 'react';
import ImgSecond from '/img/desarrollo-web-a-medida-4.webp';

const SobreNosotros = () => {
    return (
        <div className='bg-purple-950 font-mont mt-24' id='Nosotros'>
            <div className='w-[90%] container mx-auto'> 
                <section className='section-about w-full bg-purple-950 grid grid-cols-4 mt-10'>
                    <div className='grid md:col-span-2 place-items-center col-span-4'>
                        <img src={ImgSecond}  alt="desarrollo-web-a-medida-4" className='w-[90%] '/>
                    </div>
                    <div className='w-[95%] grid col-span-4 place-items-center p-5 md:col-span-2'>
                        <h1 className='text-3xl lg:text-4xl 2xl:text-5xl text-white w-[100%] font-bold my-5 text-center'>SOBRE NOSOTROS</h1>
                        <p className='text-white text-lg w-[100%] text-left'>
                            Somos una empresa joven de soluciones IT que integra consultoría en informática, desarrollo de sistemas de información, diseño de soluciones, servicio de soporte técnico y asesoramiento profesional.<br /><br />
                            Estamos en búsqueda de socios tecnológicos con quienes podamos colaborar para potenciar sus negocios a través de la innovación tecnológica y una asociación estratégica que beneficie a ambas partes. Nuestro objetivo es combinar nuestros conocimientos y recursos para impulsar conjuntamente el crecimiento y el éxito en el ámbito tecnológico.</p>        
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SobreNosotros