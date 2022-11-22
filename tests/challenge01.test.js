import countSheeps from "../src/Challenge01";

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
        expect(sheepsFiltered[0].name).toContain("Navidad");
        expect(sheepsFiltered[1].name).toContain("Ki Na Ma");
        // [{ name: 'Navidad', color: 'rojo' },
        //  { name: 'Ki Na Ma', color: 'rojo' }]
    });

});