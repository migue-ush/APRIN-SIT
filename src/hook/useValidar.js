import { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

function useValidar() {
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
    } else if (!/^[\w\sáéíóúÁÉÍÓÚüÜñÑ@]+$/.test(form.current.nombre_usuario.value)) {
      errors.nombre_usuario = "Solo caracteres válidos";
    }

    if (!form.current.email_usuario.value) {
      errors.email_usuario = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(form.current.email_usuario.value)) {
      errors.email_usuario = "Ingrese un correo electrónico válido";
    }

    if (!/^[\s\d\+]+$/.test(form.current.tel_usuario.value)) {
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
    } else if (!form.current.notas.value) {
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
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Consulta enviada exitosamente",
      });

      // Reiniciar el formulario y los errores después del envío exitoso
      e.target.reset();
      setValidationErrors({});
    } catch (error) {
      console.log(error);
    }
  }
  return{
    validationErrors,
    setValidationErrors,
    form,
    sendEmail
  }
}
export default useValidar