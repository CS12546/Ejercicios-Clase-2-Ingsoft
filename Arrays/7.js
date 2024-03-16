// 1. Función que recibe un array de números y retorna la suma de todos los números del array.
function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  
  // 2. Función que recibe un array de números y retorna el promedio de todos los números del array.
  function promedioArray(numeros) {
    let suma = sumarArray(numeros);
    return suma / numeros.length;
  }
  
  // 3. Función que toma un arreglo de strings y devuelve un nuevo arreglo con todas las letras en mayúsculas.
  function convertirAMayusculasArray(strings) {
    let nuevoArray = [];
    for (let i = 0; i < strings.length; i++) {
      nuevoArray.push(strings[i].toUpperCase());
    }
    return nuevoArray;
  }
  
  // 4. Función que toma un arreglo de números como parámetro y devuelve un nuevo arreglo que contenga solo los números pares.
  function numerosParesArray(numeros) {
    let nuevosNumeros = [];
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        nuevosNumeros.push(numeros[i]);
      }
    }
    return nuevosNumeros;
  }
  
  // Ejemplos de uso de las funciones
  const arrayNumeros = [1, 2, 3, 4, 5];
  console.log("Suma:", sumarArray(arrayNumeros)); // Imprime 15
  console.log("Promedio:", promedioArray(arrayNumeros)); // Imprime 3
  const arrayStrings = ["hola", "mundo"];
  console.log("Mayúsculas:", convertirAMayusculasArray(arrayStrings)); // Imprime ["HOLA", "MUNDO"]
  console.log("Números pares:", numerosParesArray(arrayNumeros)); // Imprime [2, 4]
  