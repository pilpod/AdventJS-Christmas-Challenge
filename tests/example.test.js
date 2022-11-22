import { sum } from "../src/Example";

describe('Just an example to testing jest installation', () => {
    test.skip('should be two', () => {
        expect(sum(1,1)).toBe(2);
    });
});