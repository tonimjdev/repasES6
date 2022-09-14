"use strict";
//**** ECMAScript6 ****/
// MÉTODOS ARRAY

//1// map() -> Permite recorrer el array y modificar los elementos presentes en él,
// retornando un nuevo array con la misma longitud que el original.
let array = [1, 2, 3, 4, 5];
// *** Devolver array con el doble de los números
const doble = array.map((x) => x * 2);
console.log("Array Original:", array);
console.log("array.map(x => x * 2); ", doble);

//2// filter() -> Recorre el array y retorna un nuevo array con aquellos elementos
// que pasen una determinada condición
// *** Devolver los números 3 y 5
const tresCinco = array.filter((x) => x === 3 || x === 5);
console.log("array.filter(x => x===3 || x===5); ", tresCinco);

//3// forEach() -> Permite iterar el contenido de un array. Recibe un callback
// que toma como parámetro el elemento actual de la iteración y el indice del mismo.
// *** Iterar el array y devolver valor y su posición
array = ["Dalí", "Van Gogh", "Goya", "Miró", "Picasso"];
console.log("Array pintores: ", array);
const pintores = array.forEach((x, i) => console.log(`${x} se encuentra en el índice ${i}`));

//4// find() -> Recorre el array y retorna la primera coincidencia del elemento que se busca
// *** Iterar array y buscar primer número mayor que 5
array = [2, 1, 4, 8, 10];
console.log("Array: ", array);
const mayorCinco = array.find((x) => x > 5);
console.log("array.find(x => x > 5); // Primer elemento que cumple: ", mayorCinco);

//5// sort() -> Ordena los elementos del array y retorna el arreglo ordenado.
// Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto
// *** Ordena el primer array de forma ascendente y el segundo de forma descendente
let arrayNum = [34, 4, 56, 12, 32, 7];
let arrayLet = ["d", "j", "z", "b", "p"];
console.log("Array números: ", arrayNum);
console.log("Array letras: ", arrayLet);
const numerosOrd = arrayNum.sort((a, b) => (a > b ? 1 : -1)); // Orden Ascendente
console.log("arrayNum.sort((a, b) => a > b ? 1 : -1); // Ascendente", numerosOrd);
const letrasOrd = arrayLet.sort((a, b) => (a > b ? -1 : 1)); // Orden Descendente
console.log("arrayLet.sort((a, b) => a > b ? -1 : 1); // Descendente", letrasOrd);

//6// some() -> Itera el array y retorna un booleano si como mínimo uno de los elementos
// presentes en el array pasa una condición determinada. Recibe un callback que se encargara
// de preguntar aquello que queremos dentro del array.
// *** Alguno de los elementos es mayor que 50?
array = [3, 45, 23, 66, 12];
console.log("Array: ", array);
const greaterThanFifty = array.some((x) => x > 50);
console.log("array.some(x => x > 50); // Alguno mayor que 50? ", greaterThanFifty); // true (66)

//7// every() -> Lo mismo que some() pero esta vez TODOS han de cumplir la condición
// *** Son todos los elementos mayor que 4?
array = [7, 8, 12, 3, 23];
console.log("Array: ", array);
const greaterThanFour = array.every((x) => x > 4);
console.log("array.every(x => x > 4); // Son todos mayor que 4? ", greaterThanFour); // false (3)

//8// concat() -> Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes,
// sino que devuelve un nuevo array
// *** Unir arrayUno y arrayDos en un solo array
let arrayUno = ["a", "b", "c"];
let arrayDos = ["d", "e", "f"];
console.log("Array 1: ", arrayUno, "Array 2: ", arrayDos);
const nuevoArray = arrayUno.concat(arrayDos);
console.log("arrayUno.concat(arrayDos); ", nuevoArray);

//9// includes() -> Determina si un array incluye un determinado elemento y retorna un booleano
// según corresponda
// *** El siguiente array incluye el número 2? y el número 10?
array = [1, 2, 3, 4, 5, 6, 7];
console.log("Array: ", array);
const includesTwo = array.includes(2);
console.log("array.includes(2); ", includesTwo); // true
const includesTen = array.includes(10);
console.log("array.includes(10);", includesTen); // false

//10// join() -> Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro
// el carácter de separación que debe agregar entre los elementos.
// *** Transforma este array en un string, sin símbolos intercalados y luego intercalando "-"
let arrayStr = ["t", "o", "n", "i"];
const arrayJoin1 = arrayStr.join("");
console.log("arrayStr.join(''); ", arrayJoin1); //toni
const arrayJoin2 = arrayStr.join("-");
console.log("arrayStr.join('-'); ", arrayJoin2); // t-o-n-i

//11// reduce() -> Aplica una función a un acumulador y a cada valor de un array
// (de izquierda a derecha) para reducirlo a un único valor.
// *** Suma los números del array utilizando el método reduce()
array = [1, 2, 3, 4, 5];
console.log("Array: ", array);
const arraySuma = array.reduce((accumulator, current) => accumulator + current);
console.log("array.reduce((accumulator, current) => accumulator + current); ", arraySuma); // 15
// *** Concatena estos 3 arrays que están dentro de un array en un sólo array
// (utilizamos reduce() con una función que concatena con el método concat())
let tresArrays = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log("Tres Arrays: ", tresArrays);
const oneArray = tresArrays.reduce((a, b) => a.concat(b));
console.log("tresArrays.reduce((a,b) => a.concat(b)); ", oneArray); // [0, 1, 2, 3, 4, 5]

//12// indexOf() -> Retorna el primer índice en el que se puede encontrar un elemento dado en el array,
// ó retorna -1 si el elemento no esta presente.
// *** Del siguiente array encuentra la 1ª posición de "drums" y "flute"
arrayStr = ["guitar", "piano", "drums", "bass"];
console.log("Array; ", arrayStr);
let resultArray = arrayStr.indexOf("drums");
console.log("arrayStr.indexOf('drums'); ", resultArray); // 2
let resultArray2 = arrayStr.indexOf("flute");
console.log("arrayStr.indexOf('flute'); ", resultArray2); // -1

//13// findIndex() -> Retorna el índice del primer elemento de un array que cumpla con la función
// de prueba proporcionada. En caso contrario devuelve -1.
// *** Del siguiente array encuentra la 1ª posición de "toyota" y "bmw"
arrayStr = ["opel", "toyota", "ford", "peugeot", "seat"];
console.log("Array; ", arrayStr);
resultArray = arrayStr.findIndex((x) => x === "toyota");
console.log("arrayStr.findIndex(x => x==='toyota'); ", resultArray); // 1
resultArray2 = arrayStr.findIndex((x) => x === "bmw");
console.log("arrayStr.findIndex(x => x==='bmw'); ", resultArray2); // -1
// *** Del siguiente array encuentra la posición del primer valor que sea par
array = [1, 3, 7, 9, 8, 6, 17];
console.log("Array: ", array);
resultArray = array.findIndex((x) => x % 2 === 0);
console.log("array.findIndex(x => (x % 2 === 0)); ", resultArray); // 4

//14// fill() -> Cambia todos los elementos de un array por un valor estático, desde el índice
// de inicio hasta el índice final. Retorna el array modificado.
// *** Llena el siguiente array con el número 10 desde la posición 3 hasta la posición 5
let arrayMix = [2, 6, true, "Pepe", 77, "Juan"];
console.log("Array: ", arrayMix);
const arrayModif = arrayMix.fill(10, 3, 5);
console.log("arrayMix.fill(10, 3); ", arrayModif); // [2, 6, true, 10, 10, 'Juan']

//15// push() -> Añade uno o más elementos al final de un array y devuelve la nueva
// longitud del array.
// *** Añade la fruta "banana" al final del array
arrayStr = ["apple", "orange", "pear"];
console.log("Array; ", arrayStr);
const pushArray = arrayStr.push("banana");
console.log("arrayStr.push('banana'); (nueva longitud) ", pushArray); // 4
console.log("Nuevo Array: ", arrayStr); // ['apple', 'orange', 'pear', 'banana']

//16// pop() -> Elimina el último elemento de un array y lo devuelve. Este método cambia
// la longitud del array.
// *** Elimina el último elemento del siguiente array
arrayStr = ["apple", "orange", "pear"];
console.log("Array; ", arrayStr);
const popArray = arrayStr.pop();
console.log("arrayStr.pop(); (elemento a eliminar) ", popArray); // 'pear'
console.log("Nuevo Array: ", arrayStr); // ['apple', 'orange']

//17// shift() -> Elimina el primer elemento del array y lo retorna.
// Este método modifica la longitud del array.
// *** Elimina el primer elemento del siguiente array
arrayStr = ["yellow", "green", "red"];
console.log("Array; ", arrayStr);
const shiftArray = arrayStr.shift();
console.log("arrayStr.shift(); (elemento a eliminar) ", shiftArray); // 'yellow'
console.log("Nuevo Array: ", arrayStr); // ['green', 'red']

//18// unshift() -> Agrega uno o más elementos al inicio del array,
// y devuelve la nueva longitud del array.
// *** Añade el color "violet" al inicio del siguiente array
arrayStr = ["yellow", "green", "red"];
console.log("Array; ", arrayStr);
const unshiftArray = arrayStr.unshift("violet");
console.log("arrayStr.unshift('violet'); ", unshiftArray); // 4
console.log("Nuevo Array: ", arrayStr); // ['violet', 'yellow', 'green', 'red]

//19// slice() -> Devuelve una copia de una parte del array dentro de un nuevo array
// empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
// *** Modifica el siguiente array dejando solo las posiciones 2 y 3
arrayStr = ["a", "b", "c", "d", "e", "f"];
console.log("Array; ", arrayStr);
const sliceArray = arrayStr.slice(2, 4); // 2-> 1r elemento que deja // 4-> 1r elemento que quita
console.log("arrayStr.slice(2,4); ", sliceArray); // ['c', 'd']

//20// reverse() -> Invierte el orden de los elementos de un array.
// El primer elemento pasa a ser el último y el último pasa a ser el primero.
// *** Invierte el órden de los elementos del siguiente array
array = [1, 2, 3, 4, 5];
console.log("Array: ", array);
console.log("array.reverse(); ", array.reverse()); // [5, 4, 3, 2, 1]

//21// splice() -> Cambia el contenido de un array eliminando elementos existentes
// y/o agregando nuevos elementos.
// *** En el siguiente array añade "banana" en la posición 1
arrayStr = ["apple", "orange", "pear"];
console.log("Array; ", arrayStr);
arrayStr.splice(1, 0, "banana"); // 1 -> posición a incorporar nuevo elemento // 0 -> cuantas posiciones eliminar a partir del elemento añadido
console.log("arrayStr.splice(1, 0, 'banana')", arrayStr); // ['apple', 'banana', 'orange', 'pear']

//22// lastIndexOf() -> Busca un elemento en un array y devuelve su posición. 
// Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.
// *** Encuentra en el array la posición del último "apple" añadido
arrayStr = ["apple", "orange", "pear", "apple"];
console.log("Array; ", arrayStr);
resultArray = arrayStr.lastIndexOf('apple');
console.log ("arrayStr.lastIndexOf('apple'); ", resultArray); // 3

//23// flat() -> Crea una nuevo array con todos los elementos de sub-array concatenados 
// recursivamente hasta la profundidad especificada.
array = [1,2,3,4,5,[6,7,[8,9]]];
const unNivel = array.flat();  // () o (1) -> un nivel de array anidado
const dosNiveles = array.flat(2); // (2) -> 2 niveles de arrays anidados
console.log("array.flat(); ",unNivel) // [1, 2, 3, 4, 5, 6, 7, [8, 9]]
console.log("array.flat(2); ",dosNiveles); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//24// Array.isArray() -> Determina si el valor pasado es un Array (devuelve true o false)
console.log("Array.isArray([1,2,3,4,5]) ",Array.isArray([1,2,3,4,5])); // true
console.log("Array.isArray({nombre: 'pepe'})",Array.isArray({nombre: 'pepe'})); // false
console.log("Array.isArray('apple')",Array.isArray('apple')); // false
console.log("Array.isArray(undefined)",Array.isArray(undefined)); // false

//25// Array.from() -> Crea una nueva instancia de Array a partir de un objeto iterable.
console.log("Array.from('hola'); ",Array.from('hola')); // ['h', 'o', 'l', 'a']

// PRUEBAS DOM
// Función para elegir color al azar
const colorRandom = () => {
  const colores = ["yellow", "red", "violet", "coral", "gold", "salmon"];
  let colorAleatorio = Math.floor((Math.random()*6));
  console.log('Color elegido: ', colores[colorAleatorio]);
  return colores[colorAleatorio];
}
// Función para mostrar datos login en el DOM
const login = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const textoRespuesta = `Su e-mail es <b>${email}</b> y su contraseña es ${password}`;
  document.getElementById('respuesta').innerHTML = textoRespuesta;
  let respuesta = document.getElementById('respuesta');
  respuesta.style.backgroundColor = colorRandom(); // Dar color de fondo al azar
}

// PRUEBAS API REST
// API Pokémon
  let pokeDOM = "";
  const getPokemon = async () => {
    console.log("pokeDOM dentro promesa: ", pokeDOM);
    try {
      let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokeDOM+"/");
      let datos = await pokemon.json();
      console.log('GET Pokémon: ', datos);
      let urlImage = datos.sprites.front_default;
      console.log('url image: ', urlImage);
      document.getElementById('pokemon').src = urlImage;
    } catch (error) {
      console.log(error);
    }
} 
const llamarPokemon = () => {
  pokeDOM = document.getElementById('eligePoke').value
  console.log('Pokémon elegido: ',pokeDOM);
  getPokemon();
}


