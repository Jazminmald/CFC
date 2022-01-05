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

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://api.whatsapp.com/';
const urlMobile = 'https://api.whatsapp.com/';
const phone = '+54 9 3513740500';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    debugger;
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let tel = document.querySelector('#tel').value
        let consulta = document.querySelector('#consulta').value
        let mensaje = 'send?phone=' + phone + '&text=Hola! mi nombre es:%0A' + nombre + '%0AMi telefono de contacto es:%0A' + tel + '%0Ay mi consulta es:%0A' + consulta + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
}); 
