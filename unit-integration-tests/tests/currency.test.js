const { parseCurrency, formatCurrency, addCurrencies } = require('../src/currency');

test('Парсинг валют', () => {
  expect(parseCurrency('$12.50')).toBe(12.5);
});

test('Форматування валют', () => {
  expect(formatCurrency(10)).toBe('$10.00');
});

test('Додавання валют', () => {
  expect(addCurrencies('$10.00', '$5.00')).toBe('$15.00');
});
