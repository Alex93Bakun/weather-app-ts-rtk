import { getUnique } from './getUnique';

test('should return array with unique values', () => {
    const arr = ['a1', 'a1', 'a2', 'a3', 'a5', 'a1'];
    expect(getUnique(arr)).toStrictEqual(['a1', 'a2', 'a3', 'a5']);
});
