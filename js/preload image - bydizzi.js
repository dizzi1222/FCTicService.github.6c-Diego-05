
    window.onload = function() {
// Array de rutas de las imágenes
var imageSources = [
    'images/ofertas/Boton_laptop-gateway-nv55c; 9000$.png',
    'images/ofertas/Boton_protector de voltajes; 1400$.png',
    'images/ofertas/Cable de cuerda de recordatorio, cable de recordatorio; 1800$.png',
    'images/ofertas/impresora project epson w29; 12000$.png',
    'images/ofertas/non-electric, washable soporte plastico lavablel no electrico; 485$.png'
    // Agrega más rutas de imágenes según sea necesario
];

// Array para almacenar objetos Image pre-cargados
var preloadedImages = [];

// Pre-cargar las imágenes
for (var i = 0; i < imageSources.length; i++) {
    var img = new Image();
    img.src = imageSources[i];
    preloadedImages.push(img); // Almacenar el objeto Image pre-cargado
}
};
