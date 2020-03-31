

// Defino las variables para 
// Obtener datos del formulario, boton enviar , abrir whatsapp web en el escritorio, y manejar el numero de mi cel
const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '+573116851031';



$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let name_id = document.querySelector('#name_id').value
        let email_id = document.querySelector('#email_id').value
        let mensaje_id = document.querySelector('#mensaje_id').value
        let message = 'send?phone=' + phone + '&text=*_Formulario Yonny Cuesta_*%0A*Contacto*%0A%0A*¿Cúal es tu nombre?*%0A' + name_id + '%0A*¿Cuál es tu correo?*%0A' + email_id + '%0A*¿Cuál es tu mensaje?*%0A' + mensaje_id + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});