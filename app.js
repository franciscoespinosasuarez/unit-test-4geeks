// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}



//DOLLAR TO YEN

let oneDollarIs ={
    "JPY": 128.55
}

const fromDollarToYen = function (valueInDollar){

    let valueInYen = valueInDollar*128.55
    return valueInYen
}


//YEN TO POUND

let oneYenIs ={
    "GBP": 0.00625
}

const fromYenToPound = function (valueInYen){

    let valueInPound = valueInYen*0.00625
    return valueInPound
}



module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound }