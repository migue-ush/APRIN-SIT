import React from 'react';
import ImgFirst from '/public/img/redes-inform-4.jpg';
import ImgSecond from '/public/img/desarrollo-web-a-medida-4.png';

const SobreNosotros = () => {
return (
    <>
    <article className='w-full flex'>
        <section className='section-about w-full bg-violet-950'>
            <div className='w-1/3 ml-40 py-8'>
                <h1 className='text-4xl text-white py-8'>Sobre Nosotros</h1>
                <p className='text-white text-xl'>Somos una empresa joven de soluciones IT que integra consultoría en informática, desarrollo de sistemas de información, diseño de soluciones, servicio de soporte técnico y asesoramiento profesional</p>        
            </div>
                <img src={ImgSecond} alt="desarrollo-web-a-medida-4"/>
        </section>    
        <section className='section-about w-full bg-violet-950'>
                <img src={ImgFirst} alt="redes-inform-4"/>
                <div className='w-1/3 ml-40'>
                    <h1 className='text-4xl text-white py-8'>POR QUE ELEGIRNOS</h1>
                    <p className='text-white text-xl'>Somos una empresa joven de soluciones IT que integra consultoría en informática, desarrollo de sistemas de información, diseño de soluciones, servicio de soporte técnico y asesoramiento profesional</p>        
                </div>
        </section>
    </article>
    </>
)
}

export default SobreNosotros
