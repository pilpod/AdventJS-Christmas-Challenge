export default function listGifts(letter) {

    const arrayGiftsList = letter.split(" ");
    const giftsList = {};

    arrayGiftsList.forEach(gift => {

        if (gift[0] === '_') {
            return
        }

        if (giftsList.hasOwnProperty(gift)) {
            giftsList[gift]++;
            return;
        }

        Object.defineProperty(giftsList, gift, {
            value: 1,
            writable: true
        });
    });

    return giftsList;
}
