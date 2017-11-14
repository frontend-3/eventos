document.addEventListener('DOMContentLoaded', function(){
   // Seleccionamos todos los <ul>.
  var list = document.querySelectorAll('ul');

  // Agregamos un evento a <ul>.
  list[0].addEventListener('click', function(event) {
    var target = event.target;

    console.log(target);

    // Imprimimos un mensaje solo si se hizo click a un elemento
    // que contiene en su clase la palabra "item".
    if (target.classList.contains('item')) {
      console.log('Hiciste click en un item');
    }
  });
}, false);
