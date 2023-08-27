import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  const [validationErrors, setValidationErrors] = useState({});

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validaciones
    const errors = {};

    if (!form.current.nombre_usuario.value) {
      errors.nombre_usuario = "Debe ingresar nombre y apellido";
    } else if (form.current.nombre_usuario.value.length < 5) {
      errors.nombre_usuario = "Mínimo 5 caracteres";
    } else if (!/^[\w@]+$/.test(form.current.nombre_usuario.value)) {
      errors.nombre_usuario = "Solo caracteres válidos";      
    } 

    if (!form.current.email_usuario.value) {
      errors.email_usuario = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(form.current.email_usuario.value)) {
      errors.email_usuario = "Ingrese un correo electrónico válido";
    }

    if (!/\d/.test(form.current.tel_usuario.value)) {
      errors.tel_usuario = "Número de teléfono inválido";
    }

    if (!form.current.servicio.value) {
      errors.servicio = "Seleccione un servicio";
    }

    if (!form.current.notas.value) {
      errors.notas = "Este campo es requerido";
    } else if (form.current.notas.value.length < 2) {
      errors.notas = "Mínimo 20 caracteres";
    } else if (form.current.notas.value.length > 200) {
      errors.notas = "Máximo 200 caracteres";
    }else if (!form.current.notas.value) {
      errors.notas = "Utilice solo letras y números";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    try {
      await emailjs.sendForm(
        "service_2p4rejg",
        "template_tbkm518",
        form.current,
        "NKNMpfg90w14HmP9e"
      );

      /* Mostrar el alerta de éxito solo si no hay errores de validación */
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });

      Toast.fire({
        icon: 'success',
        title: 'Consulta enviada exitosamente'
      });

      // Reiniciar el formulario y los errores después del envío exitoso
      e.target.reset();
      setValidationErrors({});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="Formulario" className="h-full">
      <div className="mb-4 bg-purple-950">
        <div className="mx-auto p-4 bg-purple-950 container">
          <div className=" bg-purple-950 p-4 md:p-8 lg:p-12 ">
            <h2 className="text-white text-3xl uppercase lg:text-4xl 2xl:text-5xl mb-4 text-center font-bold pt-12">
              Formulario de contacto
            </h2>
            <h6 className="text-white mb-4 text-center text-xl">
              Contáctese con nosotros y obtenga un asesoramiento personalizado
            </h6>
            <div className="mb-4 grid place-items-center grid-cols-1 pt-8">
              <label className="text-white text-2xl pb-5" htmlFor="nombre_usuario">
                Nombre y Apellido
              </label>
              <div className="grid h-16 rounded-lg mt-2 bg-purple-800 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] mx-auto">
                <span className="p-3 text-white col-span-1 grid place-content-center">
                  <i className="ml-1 fas fa-font"></i>
                </span>
                <input
                  id="nombre_usuario"
                  type="text"
                  className="p-3 bg-transparent w-full text-white grid col-span-11"
                  placeholder="Escriba su nombre completo"
                  name="nombre_usuario"
                />
              </div>
                {validationErrors.nombre_usuario && (
                  <div className="text-red-500 font-bold">
                    {validationErrors.nombre_usuario}
                  </div>
                )}
            </div>
            <div className="mb-4 place-items-center grid grid-cols-1 pt-8">
              <label className="text-white text-2xl pb-5" htmlFor="email_usuario">
                Correo electrónico
              </label>
              <div className="grid h-16 rounded-lg mt-2 bg-purple-800 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] mx-auto">
                <span className="p-3 text-white col-span-1 grid place-content-center">
                  <i className="ml-1 fas fa-envelope"></i>
                </span>
                <input
                  id="email_usuario"
                  type="email"
                  className="p-3 bg-transparent w-full text-white grid col-span-11"
                  placeholder="Escriba un email donde desea obtener respuesta"
                  name="email_usuario"                  
                />
              </div>
                {validationErrors.email_usuario && (
                  <div className="text-red-500 font-bold">
                    {validationErrors.email_usuario}
                  </div>
                )}
            </div>
            <div className="mb-4 place-items-center grid grid-cols-1 pt-8">
              <label className="text-white text-2xl pb-5" htmlFor="tel_usuario">
                Número de contacto
              </label>
              <div className="grid h-16 rounded-lg mt-2 bg-purple-800 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] mx-auto">
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
                {validationErrors.tel_usuario && (
                  <div className="text-red-500 font-bold">
                    {validationErrors.tel_usuario}
                  </div>
                )}
            </div>
            <div className="mb-4 place-items-center grid grid-cols-1 pt-8">
              <label className="text-white text-2xl pb-5" htmlFor="servicio">
                Selecciona el servicio deseado
              </label>
              <div className="grid h-16 rounded-lg mt-2 bg-purple-800 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px] mx-auto">
                <select
                  id="servicio"
                  className={`p-3 bg-transparent w-full text-white grid col-span-12 ${
                    validationErrors.servicio ? "border-red-500" : ""
                  }`}
                  name="servicio"
                  onChange={(e) => {
                    form.current.servicio.value = e.target.value;
                    setValidationErrors({
                      ...validationErrors,
                      servicio: "",
                    });
                  }}
                >
                  <option className="text-black" value="">
                    Seleccione un servicio
                  </option>
                  <option className="text-black" value="disenio_web">
                    Diseño web
                  </option>
                  <option className="text-black" value="desarrollo">
                    Desarrollo
                  </option>
                  <option className="text-black" value="mantenimiento">
                    Mantenimiento
                  </option>
                  <option className="text-black" value="otros">
                    Otros
                  </option>
                </select>
              </div>
              {validationErrors.servicio && (
                <div className="text-red-500 font-bold">{validationErrors.servicio}</div>
              )}
            </div>
            <div className="mb-4 grid grid-cols-1 place-items-center pt-8 pb-10">
              <label className="text-white text-2xl pb-5" htmlFor="notas">
                ¿Tienes alguna pregunta o solicitud especial?
              </label>
              <div className="grid place-content-center rounded-lg mt-2 bg-purple-800 grid-cols-12 gap-2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[940px] xl:w-[1200px]  mx-auto h-32">
                <textarea
                  as="textarea"
                  id="notas"
                  type="text"
                  className="p-3 w-full h-32 bg-transparent text-white grid col-span-12 resize-none"
                  placeholder="Si lo desea agregue una pregunta o una solicitud especial"
                  name="notas"
                />
              </div>
                {validationErrors.notas && (
                  <div className="text-red-500 font-bold">{validationErrors.notas}</div>
                  )}
            </div>
            <div className="grid place-items-center py-5 ">
              <button                
                type="submit"
                className="w-44 h-16 lg:w-[300px] lg:h-20 bg-purple-700 hover:bg-purple-400 hover:text-violet-600 text-white font-bold py-4 px-8 border-b-4 border-purple-700 hover:border-purple-500 rounded-lg text-xl"
              >
                ENVIAR
              </button>
            </div>
          </div>
        </div>
      </div>
      <a href="https://wa.me/5491154555573" target="_blank" rel="noopener noreferrer">
        <img src="../img/whatsapp_logo.svg" loading="lazy" alt="WhatsApp Logo" className="fixed bottom-12 right-12 z-50 w-16 h-auto"></img>
      </a>
    </form>
  );
};

export default Formulario;
