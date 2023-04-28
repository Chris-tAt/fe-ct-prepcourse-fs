/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloDeArreglos = [];
   var claves = Object.keys(objeto);
   for (var i = 0; i < claves.length; i++){
      var clave = claves[i];
      var valor = objeto[clave];
      var arrInterno = [clave, valor];
      arregloDeArreglos.push(arrInterno);
   }
   return arregloDeArreglos
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
      var result = {};
      for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (result[char]) {
          result[char]++;
        } else {
          result[char] = 1;
        }
      }
    
      const sortedResult = {};
      Object.keys(result).sort().forEach(key => {
        sortedResult[key] = result[key];
      });
    
      return sortedResult;
    
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
      var caps = "";
      var lower = "";
    
      for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
          caps += string[i];
        } else {
          lower += string[i];
        }
      }
    
      return caps + lower;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
      var words = frase.split(" ");
      var mirrored = "";
    
      for (var i = 0; i < words.length; i++) {
        var reversed = words[i].split("").reverse().join("");
        mirrored += reversed + " ";
      }
    
      return mirrored.trim();
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numStr = numero.toString();
   var numInvertido = numStr.split('').reverse().join('');
  if (numStr === numInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   
      return string.split('').filter(char => !['a', 'b', 'c'].includes(char)).join('');

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
      var intersection = [];
      for (var i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !intersection.includes(array1[i])) {
          intersection.push(array1[i]);
        }
      }
      return intersection;
    
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
