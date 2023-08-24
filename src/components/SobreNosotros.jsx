import React from 'react';
import ImgFirst from '/public/img/redes-inform-4.jpg';
import ImgSecond from '/public/img/desarrollo-web-a-medida-4.png';

const SobreNosotros = () => {
    return (
        <div className='bg-purple-950' id='Nosotros'>
            <div className='w-[90%] container mx-auto'>
                {/* <section className='section-about w-full bg-purple-900 grid grid-cols-3'>
                    <div className='w-full grid col-span-1 place-items-center place-content-center'>
                        <h1 className='text-4xl text-white w-[70%]'>Sobre Nosotros</h1>
                        <p className='text-white text-xl w-[80%]'>Somos una empresa joven de soluciones IT que integra consultoría en informática, desarrollo de sistemas de información, diseño de soluciones, servicio de soporte técnico y asesoramiento profesional</p>        
                    </div>
                    <div className='grid col-span-2 place-items-center invisible sm:visible'>
                        <img src={ImgFirst} alt="redes-inform-4" className=' lg:w-[730px]  '/>
                    </div>
                </section>  */}   
                <section className='section-about w-full bg-purple-950 grid grid-cols-4 mt-10'>
                    <div className='grid md:col-span-2 place-items-center col-span-4'>
                        <img src={ImgSecond}  alt="desarrollo-web-a-medida-4" className='w-[90%] '/>
                    </div>
                    <div className='w-[95%] grid col-span-4 place-items-center p-5 md:col-span-2'>
                        <h1 className='text-3xl lg:text-4xl 2xl:text-5xl text-white w-[100%] font-bold my-5 text-center' >SOBRE NOSOTROS</h1>
                        <p className='text-white text-lg w-[100%] text-justify'>Estamos en búsqueda de socios tecnológicos con quienes podamos colaborar para potenciar sus negocios a través de la innovación tecnológica y una asociación estratégica que beneficie a ambas partes. Nuestro objetivo es combinar nuestros conocimientos y recursos para impulsar conjuntamente el crecimiento y el éxito en el ámbito tecnológico y más allá.</p>        
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SobreNosotros