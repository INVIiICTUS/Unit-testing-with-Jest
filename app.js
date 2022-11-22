const fromEuroToDollar = function(valueInEuro) {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 115.60;
    //return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.006384;
    //return the dollar value
    return valueInPound;
}

const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3));

module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};