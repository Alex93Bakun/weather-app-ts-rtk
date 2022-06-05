import { getTime } from './getTime';

test('should return string', () => {
    const arr = [14, 36];
    expect(getTime(arr)).toBe('14:36');
});
