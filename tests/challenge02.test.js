import listGifts from "../src/Challenge02";

describe('Challenge 02 - ¡Ayuda al elfo a listar los regalos!', () => {

    test('should return a gifts list', () => {
        const letter = 'bici coche balón _playstation bici coche peluche';

        const gifts = listGifts(letter);

        expect(gifts).toMatchObject({});
        expect(gifts).toHaveProperty('bici', 2);
        expect(gifts).toHaveProperty('coche', 2);
        expect(gifts).toHaveProperty('balón', 1);
        expect(gifts).toHaveProperty('peluche', 1);
        expect(gifts).toMatchObject({
            bici: 2,
            coche: 2,
            balón: 1,
            peluche: 1
        });
    });

});