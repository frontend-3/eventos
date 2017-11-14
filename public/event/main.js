document.addEventListener('DOMContentLoaded', function(){
   // Seleccionamos todos los forms.
  var form = document.querySelectorAll('form');

  // Agregamos un evento al primer form.
  form[0].addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('submit');
  });
}, false);
