import countSheeps from "../src/Challenge01";
import contarOvejas from "../src/Challenge01";

describe('Counting Sheeps to sleep', () => {

    test('should return only red sheeps with letters n and a in its name', () => {
        // Given
        const sheeps = [
            { name: 'Noa', color: 'azul' },
            { name: 'Euge', color: 'rojo' },
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' },
            { name: 'AAAAAaaaaa', color: 'rojo' },
            { name: 'Nnnnnnnn', color: 'rojo' }
        ];
        // When
        const sheepsFiltered = countSheeps(sheeps);
        // Then
        expect(sheepsFiltered).toHaveLength(2);
        // [{ name: 'Navidad', color: 'rojo' },
        //  { name: 'Ki Na Ma', color: 'rojo' }]
    });

});