/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false
*/

const numbers = (array) => {
    
    for (let index = 0; index < array.length; index+=1) {
       const recebNum = array[index];
      if (typeof array[index] === 'number') {
        return true;
      } 
        return false;          
    }
};
module.exports = numbers;
