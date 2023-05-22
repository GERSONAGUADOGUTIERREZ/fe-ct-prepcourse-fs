/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return(array[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var n = array.length - 1;
   return(array[n]); 
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return(array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var n = array.length;
   for(var i = 0; i < n ; i++ ){
      array[i]=array[i] + 1;
   }
   return(array);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return(array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return(array);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var string = palabras.join(' ');
   return(string);
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var condicion = array.includes(elemento);
   return(condicion);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var n = arrayOfNums.length;
   var suma = 0;
   for(var i = 0; i < n; i++){
      suma = suma + arrayOfNums[i];
   }
   return(suma);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var n = resultadosTest.length;
   suma = 0;
   for(var i = 0;i < n;i++){
      suma = suma + resultadosTest[i];
   } 
   var promedio = (suma/n);
   return(promedio);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var n = arrayOfNums.length;
   var mayor =arrayOfNums[0];
   for(var i = 1; i < n; i++){
      if(mayor < arrayOfNums[i])
      mayor = arrayOfNums[i];
   }
   return(mayor);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
  var n = arguments.length;
  var producto = 1;
  var valor =0;
  if(n!=0){
  for(var i = 0;i<n;i++){
   producto = producto * arguments[i];
  }
  return(producto);
}
else
return(valor);
}
function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var n = 0;
   var m =array.length;
   for(var i = 0;i < m;i++){
      if(array[i] > 18){
         n++;
      }
   }
   return(n);
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia == 1 || numeroDeDia == 7)
   return("Es fin de semana");
   else(numeroDeDia >= 2 && numeroDeDia <= 6)
   return("Es dia laboral");
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var n;
   if(num>10){
      do{
         n=Math.floor(num/10);
      }while(n>10);
   }
   else
      n= num;
   var primeraCifra=n;
   if(primeraCifra==9)
   return(true);
   else
   return(false);
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var n = array.length;
   var s = true;
   for(var i = 1;i < n;i++){
      if(array[0] != array[i])
      s = false;
      break;
   }
   if(s == false)
   return(false);
   else
   return(true);
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var n = array.length;
   var m = 0;
   var arreglo=[];
   for(var i=0; i<n;i++){
      if(array[i]=="Enero"|| array[i]=="Marzo"|| array[i]=="Noviembre"){
         arreglo[m] = array[i];
         m++;
      }
   }
   if(m >=0 && m<=2)
   return("No se encontraron los meses pedidos");
   else
   return(arreglo);
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arreglo=[];
   for(var i=0;i<11;i++){
      arreglo[i]= 6*i;
   }
   return(arreglo);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arreglo=[];
   var j = 0;
   var n = array.length;
   for(i=0;i<n;i++){
   if(array[i] > 100){
      arreglo[j]=array[i];
      j++;
   }
   }
   return(arreglo);
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arreglo=[];
   var m = 0 ;
  for(var i=1;i<11;i++){
   num=num+2;
   arreglo[m] = num;
   m++;
   if(num == i){
      break;
   }
  }
  if(i<11){
   return("Se interrumpió la ejecución");
  }
  else
  return(arreglo);
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arreglo =[];
   var j=0;
   for(var i=1;i<11;i++){
      if(i==5){
      continue;
      }
      num = num + 2;
      arreglo[j]=num;
      j++;
   }
   return(arreglo);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
}
