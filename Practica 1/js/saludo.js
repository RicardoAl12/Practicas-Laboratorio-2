var today = new Date();
var hourNow = today.getHours();
var saludo;

console.log(today);
console.log(hourNow);


if(hourNow > 18){
    saludo = 'Buenas Noches';
}else if (hourNow > 12){
    saludo = 'Buenas Tardes';
}else if (hourNow > 0){
    saludo = 'Buenos d&iacute;as';
}else{
    saludo = 'Bienvenido!!';
}


document.write('<h3>' + saludo + '</h3>');




