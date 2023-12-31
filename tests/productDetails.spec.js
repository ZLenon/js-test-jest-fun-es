const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    expect(typeof productDetails).toBe('function');
    // Teste se productDetails é uma função.
    
    expect(Array.isArray(productDetails())).toBe(true);
    // Teste se o retorno da função é um array.

    expect(productDetails().length).toBe(2);
    // Teste se o array retornado pela função contém dois itens dentro.

    expect(typeof productDetails()[0] && typeof productDetails()[1]).toBe('object');
    // Teste se os dois itens dentro do array retornado pela função são objetos.

    expect(JSON.stringify(productDetails('produto1','produto2')[0]) === JSON.stringify(productDetails('produto1','produto2')[1])).toBe(false);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.

    expect().toBe()
    // Teste se os dois productIds terminam com 123.
  });
  console.log((Object.keys(productDetails('produto1', 'produto2')[0])));
});
