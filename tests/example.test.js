import { sum } from "../src/scripts/Example";

describe.skip('Just an example to testing jest installation', () => {
    test.skip('should be two', () => {
        expect(sum(1,1)).toBe(2);
    });
});