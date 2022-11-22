export default function countSheeps(sheeps) {

    let sheepsFiltered = [];

    sheeps.forEach(sheep => {
        if (checkIfSheepIsRed(sheep.color) &&
            isNameContainLettersNandA(sheep.name)
        ) sheepsFiltered.push(sheep);
    });

    return sheepsFiltered;
}

function checkIfSheepIsRed(sheepColor) {
    if (sheepColor === 'rojo') return true;
    return false;
}

function isNameContainLettersNandA(sheepName) {
    const name = sheepName.toLowerCase();

    if (name.includes('a') &&
        name.includes('n')) return true;
    return false;
}