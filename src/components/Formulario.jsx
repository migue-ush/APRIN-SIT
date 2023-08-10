const Formulario = () => {
    return (
        <div className="mb-4 bg-purple-900 p-4 md:p-8 lg:p-12">
            <h2 className="text-white text-4xl mb-4 text-center font-bold">Formulario de contacto</h2>
            <h6 className="text-white mb-4 text-center">Contáctese con nosotros y obtenga un asesoramiento personalizado</h6>

            <div className="mb-4 grid grid-cols-1 text-center place-items-center">
                <label
                    className="text-white"
                    htmlFor="nombre"
                >
                    Nombre
                </label>
                <div className="flex mt-2 bg-purple-700 col-span-4 w-[90%] md:w-[75%] lg:w-[50%]">
                    <span className="flex items-center p-3 text-white">
                        <i className="mr-2 fas fa-font"></i>
                    </span>
                    <input
                        id="nombre"
                        type="text"
                        className="p-3 bg-transparent w-full text-white"
                        placeholder="Escriba su nombre completo"
                        name="nombre"
                    />
                </div>
            </div>
            <div className="mb-4 grid grid-cols-1 text-center place-items-center ">
                <label
                    className="text-white"
                    htmlFor="mail"
                    
                >
                    Correo electrónico
                </label>
                <div className="flex mt-2 bg-purple-700 col-span-4 w-[90%] md:w-[75%] lg:w-[50%]">
                    <span className="flex items-center p-3 text-white">
                        <i className="mr-2 fas fa-envelope"></i>
                    </span>
                    <input 
                        id="mail"
                        type="text"
                        className="mt-2 p-3 bg-purple-700 col-span-4 w-[90%] md:w-[75%] lg:w-[50%] text-white"
                        placeholder="Escriba un email donde desea obtener respuesta"
                        name="mail"
                    />
                </div>
            </div>
            <div className="mb-4 grid grid-cols-1 text-center place-items-center ">
                <label
                    className="text-white"
                    htmlFor="tel"
                >
                    Número de contacto
                </label>
                <div className="flex mt-2 bg-purple-700 col-span-4 w-[90%] md:w-[75%] lg:w-[50%]">
                    <span className="flex items-center p-3 text-white">
                        <i className="mr-2 fas fa-phone"></i>
                    </span>
                    <input 
                        id="tel"
                        type="text"
                        className="mt-2 p-3 bg-purple-700 col-span-4 w-[90%] md:w-[75%] lg:w-[50%] text-white"
                        placeholder="Ej: (+54 11) 68126810"
                        name="tel"
                    />
                </div>
            </div>
            <div className="mb-4 grid grid-cols-1 text-center place-items-center ">
                <label
                    className="text-white"
                    htmlFor="servicio"   
                >
                    Selecciona el servicio deseado
                </label>

                <select
                    id="servicio"
                    type="text"
                    className="mt-2 p-3 bg-purple-700 col-span-4 w-[90%] md:w-[75%] lg:w-[50%] text-white"
                    placeholder="Elija por el servicio que desea contactarnos"
                    name="servicio"
                >
                    <option value="servicio_1">Servicio 1</option>
                    <option value="servicio_2">Servicio 2</option>
                    <option value="servicio_">Servicio 3</option>
                </select>
            </div>
            <div className="mb-4 grid grid-cols-1 text-center place-items-center ">
                <label
                    className="text-white"
                    htmlFor="notas"
                >
                    ¿Tienes alguna pregunta o solicitud especial?
                </label>
                <textarea 
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block p-3 text-center bg-purple-700 h-28 align-self w-[90%] md:w-[75%] lg:w-[50%]  text-white"
                    placeholder="Si lo desea agregue una pregunta a solicitud especial"
                    name="notas"
                />
            </div>
            
        </div>
    )
}

export default Formulario

/** 

const Formulario = () => {
    return (
        <form>
            <div className=" bg-purple-900 p-4 md:p-8 lg:p-12 ">
                <h2 className="text-white text-6xl mb-4 text-center font-bold pt-12 ">Formulario de contacto</h2>
                <h6 className="text-white mb-4 text-center text-xl">Contáctese con nosotros y obtenga un asesoramiento personalizado</h6>

                <div className=" mb-4 grid grid-cols-1 place-items-center pt-8">
                    <label
                        className="text-white text-2xl pb-5"
                        htmlFor="nombre"
                    >
                        Nombre
                    </label>
                    <div className="grid h-16 rounded-lg mt-2 bg-purple-700 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
                        <span className="p-3 text-white col-span-1 grid place-content-center">
                            <i className="mr-2 fas fa-font"></i>
                        </span>
                        <input
                            id="nombre"
                            type="text"
                            className="p-3 bg-transparent w-full text-white grid col-span-11"
                            placeholder="Escriba su nombre completo"
                            name="nombre"
                        />
                    </div>
                </div>
                <div className="mb-4 grid grid-cols-1 place-items-center pt-8">
                    <label
                        className="text-white text-2xl pb-5"
                        htmlFor="mail"
                        
                    >
                        Correo electrónico
                    </label>
                    <div className="grid h-16 rounded-lg mt-2 bg-purple-700 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
                        <span className="p-3 text-white col-span-1 grid place-content-center">
                            <i className="mr-2 fas fa-envelope"></i>
                        </span>
                        <input 
                            id="mail"
                            type="text"
                            className="p-3 bg-transparent w-full text-white grid col-span-11"
                            placeholder="Escriba un email donde desea obtener respuesta"
                            name="mail"
                        />
                    </div>
                </div>
                <div className="mb-4 grid grid-cols-1 place-items-center pt-8">
                    <label
                        className="text-white text-2xl pb-5"
                        htmlFor="tel"
                    >
                        Número de contacto
                    </label>
                    <div className="grid h-16 rounded-lg mt-2 bg-purple-700 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
                        <span className="p-3 text-white col-span-1 grid place-content-center">
                            <i className="mr-2 fas fa-phone"></i>
                        </span>
                        <input 
                            id="tel"
                            type="text"
                            className="p-3 bg-transparent w-full text-white grid col-span-11"
                            placeholder="Ej: (+54 11) 68126810"
                            name="tel"
                        />
                    </div>
                </div>
                <div className="mb-4 grid grid-cols-1 place-items-center pt-8">
                    <label
                        className="text-white text-2xl pb-5"
                        htmlFor="servicio"   
                    >
                        Selecciona el servicio deseado
                    </label>
                    <div className="grid h-16 rounded-lg mt-2 bg-purple-700 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
                        <select
                            id="servicio"
                            type="text"
                            className="p-3 bg-transparent w-full text-white grid col-span-12"
                            placeholder="Elija por el servicio que desea contactarnos"
                            name="servicio"
                        >
                            <option className=" text-black" value="servicio_1">Servicio 1</option>
                            <option className=" text-black" value="servicio_2">Servicio 2</option>
                            <option className=" text-black" value="servicio_3">Servicio 3</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4 grid grid-cols-1 place-items-center pt-8 pb-40">
                    <label
                        className="text-white text-2xl pb-5"
                        htmlFor="notas"
                    >
                        ¿Tienes alguna pregunta o solicitud especial?
                    </label>
                    <div className="grid place-content-center rounded-lg mt-2 bg-purple-700 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] 2xl:w-[1400px] mx-auto h-32" >
                        <textarea 
                            as="textarea"
                            id="notas"
                            type="text"
                            className="p-3 w-full h-full bg-transparent text-white grid col-span-12"
                            placeholder="Si lo desea agregue una pregunta a solicitud especial"
                            name="notas"
                        />
                    </div>
                </div>
                
            </div>
        </form>
    )
}

export default Formulario


*/