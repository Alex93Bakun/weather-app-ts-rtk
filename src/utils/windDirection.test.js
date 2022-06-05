import { windDirection } from './windDirection';

test('should return string', () => {
    expect(windDirection(40)).toBe('NNE');
});