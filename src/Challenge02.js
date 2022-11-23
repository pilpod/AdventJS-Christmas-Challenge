export default function listGifts(letter) {

    const arrayGiftsList = letter.trim().split(" ");
    const giftsList = {};

    arrayGiftsList.forEach(gift => {
        const wasStrikethroughGift = (gift[0] === '_');

        if (wasStrikethroughGift) return;

        if (giftsList.hasOwnProperty(gift)) {
            giftsList[gift]++;
            return;
        }

        giftsList[gift] = 1;

        /* Object.defineProperty(giftsList, gift, {
            value: 1,
            writable: true
        }); */
    });

    return giftsList;
}