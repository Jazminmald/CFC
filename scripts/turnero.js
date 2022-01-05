function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario1 = document.querySelector('#formularioturno');
const buttonSubmit1 = document.querySelector('#submit1');
const urlDesktop1 = 'https://api.whatsapp.com/';
const urlMobile1 = 'https://api.whatsapp.com/';
const phone1 = '+54 9 3513740500';

formulario1.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit1.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit1.disabled = true

    setTimeout(() => {
        let nombre1 = document.querySelector('#nombre').value
        let tel1 = document.querySelector('#tel').value
        let profesional = document.querySelector('#profesional option:checked').value
        let tipo_turno = document.querySelector('#tipo-turno option:checked').value
        let horario = document.querySelector('#horario option:checked').value
        let consulta1 = document.querySelector('#consulta').value
        let mensaje1 = 'send?phone=' + phone1 + '&text=Hola! mi nombre es:%0A' + nombre1 + '%0AMi telefono de contacto es:%0A' + tel1 + '%0AQuiero solicitar un turno con:%0A' + profesional + '%0A para un/a:%0A' + tipo_turno + '%0Apreferentemente por la:%0A' + horario + '%0Ay mi consulta es:%0A' + consulta1;

        if (isMobile()) {
            window.open(urlMobile1 + mensaje1, '_blank')
        } else {
            window.open(urlDesktop1 + mensaje1, '_blank')
        }
        buttonSubmit1.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit1.disabled = false
    }, 3000);
});
