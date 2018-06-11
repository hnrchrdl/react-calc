import { calc } from './lib';

test('should produce correct results', () => {
  expect(calc(['2', '+', '2'])).toEqual(4);
  expect(calc(['0', '+', '2'])).toEqual(2);
  expect(calc(['0000', '-', '2'])).toEqual(-2);
  expect(calc(['0', '*', '10'])).toEqual(0);
  expect(calc(['.6', '+', '1.4'])).toEqual(2);
  expect(calc(['1', '/', '2'])).toEqual(0.5);
  expect(calc(['000.002', '+', '1.0'])).toEqual(1.002);
});
