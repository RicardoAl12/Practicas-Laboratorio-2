var precio;
var cantidad;
var total;

producto = 'Suavizante';
precio = 0.75;
cantidad = 14 ;
total = precio * cantidad;

var el = document.getElementById('cost');
el.textContent = producto + '$' + total;




