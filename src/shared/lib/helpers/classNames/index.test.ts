import classNames from './index';

test('should return empty string if arguments are empty', () => {
  expect(classNames('', {}, [])).toBe('');
});

test('should return only one class name if only one is passed', () => {
  expect(classNames('test', {}, [])).toBe('test');
});

test('should return className and modifiers', () => {
  expect(classNames('test', {testModifier: true}, []))
      .toBe('test testModifier');
});

test('should return correct className', () => {
  expect(classNames('test',
      {testModifier: true, testModifier2: false},
      ['test--test']))
      .toBe('test testModifier test--test');
});

