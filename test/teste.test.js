const { somaNum } = require('../index');

test('A função deve somar dois números', () => {
  const esperado = 1000;
  const retornado = somaNum(800, 200);

  expect(retornado).toBe(esperado);
});

const { subNum } = require('../index');

test('A função deve subtrair dois números', () => {
  const esperado = 600;
  const retornado = subNum(800, 200);

  expect(retornado).toBe(esperado);
});
