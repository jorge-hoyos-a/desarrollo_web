let numero;
numero = parseInt(prompt('Ingrese un número entre 1 y 5: '));
switch (numero){
    case 1:
        document.write('Uno')
        break;
    case 2:
        document.write('Dos')
        break;
    case 3:
        document.write('Tres')
        break;
    case 4:
        document.write('Cuatro')
        break;
    case 5:
        document.write('Cinco')
        break;
    default:
        document.write('El valor debe estar entre 1 y 5')
}

let ciudad = prompt('Ingrese ciudad');
switch (ciudad){
    case 'Medellín':
        document.write('La ciudad es Medellín')
        break;
    case 'Bogotá':
        document.write('La ciudad es Bogotá')
        break;
}