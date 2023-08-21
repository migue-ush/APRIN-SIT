import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Formulario = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2p4rejg', 'template_tbkm518', form.current, 'NKNMpfg90w14HmP9e')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4 bg-purple-900">
                <div className="mx-auto p-4 bg-purple-900 container">
                    <div className=" bg-purple-900 p-4 md:p-8 lg:p-12 ">
                        <h2 className="text-white text-3xl uppercase lg:text-4xl 2xl:text-5xl mb-4 text-center font-bold pt-12">Formulario de contacto</h2>
                        <h6 className="text-white mb-4 text-center text-xl">Contáctese con nosotros y obtenga un asesoramiento personalizado</h6>
                        <div className="mb-4 grid place-items-center grid-cols-1 pt-8">
                            <label
                                className="text-white text-2xl pb-5"
                                htmlFor="nombre"
                            >
                                Nombre
                            </label>
                            <div className="grid h-16 rounded-lg mt-2 bg-purple-700 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] mx-auto">
                                <span className="p-3 text-white col-span-1 grid place-content-center">
                                    <i className="ml-1 fas fa-font"></i>
                                </span>
                                <input
                                    id="nombre_usuario"
                                    type="text"
                                    className="p-3 bg-transparent w-full text-white grid col-span-11"
                                    placeholder="Escriba su nombre completo"
                                    name="nombre_usuario"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4 place-items-center grid grid-cols-1 pt-8">
                            <label
                                className="text-white text-2xl pb-5"
                                htmlFor="email"

                            >
                                Correo electrónico
                            </label>
                            <div className="grid h-16 rounded-lg mt-2 bg-purple-700 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] mx-auto">
                                <span className="p-3 text-white col-span-1 grid place-content-center">
                                    <i className="ml-1 fas fa-envelope"></i>
                                </span>
                                <input
                                    id="email_usuario"
                                    type="email"
                                    className="p-3 bg-transparent w-full text-white grid col-span-11"
                                    placeholder="Escriba un email donde desea obtener respuesta"
                                    name="email_usuario"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4 place-items-center grid grid-cols-1 pt-8">
                            <label
                                className="text-white text-2xl pb-5"
                                htmlFor="tel"
                            >
                                Número de contacto
                            </label>
                            <div className="grid h-16 rounded-lg mt-2 bg-purple-700 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] mx-auto">
                                <span className="flex items-center p-3 text-white">
                                    <i className="ml-1 fas fa-phone"></i>
                                </span>
                                <input
                                    id="tel_usuario"
                                    type="text"
                                    className="p-3 bg-transparent w-full text-white grid col-span-11"
                                    placeholder="Ej: (+54 11) 68126810"
                                    name="tel_usuario"
                                />
                            </div>
                        </div>
                        <div className="mb-4 place-items-center grid grid-cols-1 pt-8">
                            <label
                                className="text-white text-2xl pb-5"
                                htmlFor="servicio"
                            >
                                Selecciona el servicio deseado
                            </label>
                            <div className="grid h-16 rounded-lg mt-2 bg-purple-700 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] mx-auto">
                                <select
                                    id="servicio"
                                    type="text"
                                    className="p-3 bg-transparent w-full text-white grid col-span-12"
                                    placeholder="Elija por el servicio que desea contactarnos"
                                    name="servicio"
                                >
                                    <option className=" text-black" value="disenio_web">Diseño web</option>
                                    <option className=" text-black" value="desarrollo">Desarrollo</option>
                                    <option className=" text-black" value="mantenimiento">Mantenimiento</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4 grid grid-cols-1 place-items-center pt-8 pb-10">
                            <label
                                className="text-white text-2xl pb-5"
                                htmlFor="notas"
                            >
                                ¿Tienes alguna pregunta o solicitud especial?
                            </label>
                            <div className="grid place-content-center rounded-lg mt-2 bg-purple-700 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px]  mx-auto h-32">
                                <textarea
                                    as="textarea"
                                    id="notas"
                                    type="text"
                                    className="p-3 w-full h-full bg-transparent text-white grid col-span-12"
                                    placeholder="Si lo desea agregue una pregunta o una solicitud especial"
                                    name="notas"
                                />
                            </div>
                        </div>
                        <div className="grid place-items-center py-5 ">
                            <button type="submit"
                                className="w-44 h-16 lg:w-[300px] lg:h-20 bg-purple-500 hover:bg-purple-300 hover:text-violet-600 text-white font-bold py-4 px-8 border-b-4 border-purple-700 hover:border-purple-500 rounded-lg text-xl">
                                ENVIAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Formulario

