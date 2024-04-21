$(document).ready(function(){
    $('.slick-carousel').slick({
        slidesToShow: 2, // Define cuántas imágenes mostrar en la fila
        slidesToScroll: 1, // Define cuántas imágenes desplazar al avanzar
        arrows: true, // Muestra las flechas de navegación
        dots: false, // No muestra los puntos de navegación
        infinite: true, // Permite un desplazamiento infinito
        draggable: true, // Permite arrastrar con el mouse
        autoplay: true, // Inicia la reproducción automática
        autoplaySpeed: 1800, // Velocidad de la reproducción automática en milisegundos
        prevArrow: '<button type="button" class="slick-prev"> <b><</b> </button>',
        nextArrow: '<button type="button" class="slick-next"> <b>></b> </button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});