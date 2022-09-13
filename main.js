"use strict";
// Métodos Array

// map() -> Permite recorrer el array y modificar los elementos presentes en él,
// retornando un nuevo array con la misma longitud que el original.
let array = [1, 2, 3, 4, 5];
// *** Devolver array con el doble de los números
const doble = array.map((x) => x * 2);
console.log("Array Original:", array);
console.log("array.map(x => x * 2); ", doble);

// filter() -> Recorre el array y retorna un nuevo array con aquellos elementos
// que pasen una determinada condición
// *** Devolver los números 3 y 5
const tresCinco = array.filter((x) => x === 3 || x === 5);
console.log("array.filter(x => x===3 || x===5); ", tresCinco);

// forEach() -> Permite iterar el contenido de un array. Recibe un callback
// que toma como parámetro el elemento actual de la iteración y el indice del mismo.
// *** Iterar el array y devolver valor y su posición
array = ["Dalí", "Van Gogh", "Goya", "Miró", "Picasso"];
console.log("Array pintores: ", array);
const pintores = array.forEach((x, i) => console.log(`${x} se encuentra en el índice ${i}`));

// find() -> Recorre el array y retorna la primera coincidencia del elemento que se busca
// *** Iterar array y buscar primer número mayor que 5
array = [2, 1, 4, 8, 10];
console.log("Array: ", array);
const mayorCinco = array.find((x) => x > 5);
console.log("array.find(x => x > 5); // Primer elemento que cumple: ", mayorCinco);

// sort() -> Ordena los elementos del array y retorna el arreglo ordenado.
// Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto
let arrayNum = [34, 4, 56, 12, 32, 7];
let arrayLet = ["d", "j", "z", "b", "p"];
console.log("Array números: ", arrayNum);
console.log("Array letras: ", arrayLet);
const numerosOrd = arrayNum.sort((a, b) => a > b ? 1 : -1); // Orden Ascendente
console.log("arrayNum.sort((a, b) => a > b ? 1 : -1); // Ascendente", numerosOrd);
const letrasOrd = arrayLet.sort((a, b) => a > b ? -1 : 1); // Orden Descendente
console.log("arrayLet.sort((a, b) => a > b ? -1 : 1); // Descendente", letrasOrd);

// some() -> Itera el array y retorna un booleano si como mínimo uno de los elementos 
// presentes en el array pasa una condición determinada. Recibe un callback que se encargara 
// de preguntar aquello que queremos dentro del array.
// *** Alguno de los elementos es mayor que 50?
array = [3, 45, 23, 66, 12];
console.log("Array: ", array);
const greaterThanFifty = array.some(x => x > 50);
console.log("array.some(x => x > 50); // Alguno mayor que 50? ", greaterThanFifty); // true (66)

// every() -> Lo mismo que some() pero esta vez TODOS han de cumplir la condición
// *** Son todos los elementos mayor que 4?
array = [7, 8, 12, 3, 23];
console.log("Array: ", array);
const greaterThanFour = array.every(x => x > 4);
console.log("array.every(x => x > 4); // Son todos mayor que 4? ", greaterThanFour); // false (3)

// concat() -> Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, 
// sino que devuelve un nuevo array
let arrayUno = ["a", "b", "c"];
let arrayDos = ["d", "e", "f"];
console.log("Array 1: ", arrayUno, "Array 2: ", arrayDos);
const nuevoArray = arrayUno.concat(arrayDos);
console.log("arrayUno.concat(arrayDos); ", nuevoArray);

// includes() -> Determina si un array incluye un determinado elemento y retorna un booleano 
// según corresponda
array = [1, 2, 3, 4, 5, 6, 7];
console.log("Array: ", array);
const includesTwo = array.includes(2);
console.log("array.includes(2); ", includesTwo); // true
const includesTen = array.includes(10);
console.log("array.includes(10);", includesTen); // false

// join() -> Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro 
// el carácter de separación que debe agregar entre los elementos.
const arrayStr = ["t", "o", "n", "i"];
const arrayJoin1 = arrayStr.join('');
console.log("arrayStr.join(''); ", arrayJoin1); //toni
const arrayJoin2 = arrayStr.join('-');
console.log("arrayStr.join('-'); ", arrayJoin2) // t-o-n-i

// reduce() -> Aplica una función a un acumulador y a cada valor de una array 
// (de izquierda a derecha) para reducirlo a un único valor.