window.addEventListener('scroll', function() {
    var elemento = document.querySelector('.presentacion-video');

    if (this.window.scrollY > 2000) {
        elemento.classList.add('cambio-propiedad');
    } else {
        elemento.classList.remove('cambio-propiedad');
    }
})