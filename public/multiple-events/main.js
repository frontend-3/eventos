document.addEventListener('DOMContentLoaded', function(){
   // Seleccionamos todos los <ul>.
  var items = document.querySelectorAll('.item');

  // Agregamos el evento click item por item
  for(var i = 0; i < items.length; i++) {
    // Se agrega un  evento en el item actual de la iteración
    items[i].addEventListener('click', function() {
      console.log('Hiciste click en un item');
    });
  }
}, false);
