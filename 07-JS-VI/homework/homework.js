// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //nombre.charAt(0).toUpperCase()+nombre.slice(1)

  var primerCaracter= nombre.charAt(0);
  var mayuscula = primerCaracter.toUpperCase();
  var restoDeNombre = nombre.slice(1);

  var resultado = mayuscula + restoDeNombre;

  return resultado;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback 
  //junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return cb(n1,n2)
  }

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  
  var suma=0;
  for( var i = 0; i < numeros.length; i ++)
  {

    suma = suma + numeros[i];

  }
cb(suma);

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
 for(var i=0;i<array.length; i++){
  cb(array[i])
 }
    //array.forEach(el => cb(el));
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto 
  //por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  //
  var nuevoArray= array.map(function(elemento){//elemento esta dentro del array
    return cb(elemento)  // se pasa cada elemento del array al call back y se retorna al nuevoArray
       
    
  });

  return nuevoArray; //se retorna el nuevoArray

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  
  var newArray = [];
    for(var i = 0; i<array.length; i++){

      if(array[i][0]==="a"){
        newArray.push(array[i]);
      }

    }
        
    return newArray;
  }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
