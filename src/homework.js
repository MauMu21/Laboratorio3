(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  let multiplied = numbers.map(num => num * 5);
  
  console.log(multiplied); 
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */



  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];
  let sortedNames = names.sort();

  console.log(sortedNames);

  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */



  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];
  let uniqueData = [...new Set(data)];

  console.log(uniqueData);
  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */



  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";
  let frequency = {};

      for (let char of largeWord) {
        frequency[char] = (frequency[char] || 0) + 1;
      }

        console.log(frequency); 
  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */

})();
