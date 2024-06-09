function saludo(nombre) {
    var container = document.getElementById("saludo-container");
    container.innerHTML = '<h3>' + "¡Hola, " + nombre + "!" + '</h3>';
}
saludo('Andres');

