export const convertRomanToNumber = (romanNumber: string) => {
    const romanNumerals: { [key: string]: number } = {
        I: 1,
        II: 2,
        III: 3,
        IV: 4,
        V: 5,
        VI: 6,
        VII: 7,
        VIII: 8,
        IX: 9,
    }
    return romanNumerals[romanNumber] !== undefined ? romanNumerals[romanNumber] : 10;
};

export const CapitalizeFirstLetter = (inputString: string): string => {
    if (!inputString) {
        return inputString;
    }

    if (inputString?.length === 0) {
        return inputString;
    }

    const firstLetter = inputString[0].toUpperCase();
    const restOfTheString = inputString.slice(1);

    return firstLetter + restOfTheString;
}; 