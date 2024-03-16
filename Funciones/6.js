// 1. Función que convierte un string a mayúsculas
function convertirAMayusculas(texto) {
    return texto.toUpperCase();
  }
  
  // 2. Función que convierte un string a minúsculas
  function convertirAMinusculas(texto) {
    return texto.toLowerCase();
  }
  
  // 3. Función que resta dos números
  function restar(num1, num2) {
    return num1 - num2;
  }
  
  // 4. Función que divide dos números
  function dividir(num1, num2) {
    return num1 / num2;
  }
  
  // 5. Función que multiplica dos números
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  // 6. Función que devuelve la longitud de un string
  function longitudString(texto) {
    return texto.length;
  }
  
  // Ejemplo de uso de las funciones
  const resultado1 = convertirAMayusculas("hola mundo");
  console.log(resultado1); // Imprime "HOLA MUNDO"
  
  const resultado2 = convertirAMinusculas("HOLA MUNDO");
  console.log(resultado2); // Imprime "hola mundo"
  
  const resultado3 = restar(10, 5);
  console.log(resultado3); // Imprime 5
  
  const resultado4 = dividir(10, 2);
  console.log(resultado4); // Imprime 5
  
  const resultado5 = multiplicar(5, 2);
  console.log(resultado5); // Imprime 10
  
  const resultado6 = longitudString("Hola Mundo");
  console.log(resultado6); // Imprime 10
  