//TEST EURO TO DOLLAR

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar} = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


//TEST DOLLAR TO YEN

test("One dollar should be 128.55 yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(2)

    const expected = 2 * 128.55; 
    
     expect(fromDollarToYen(2)).toBe(257.1);
})


//TEST YEN TO POUND

test("One yen should be 0.00625 pounds", function(){
    const { fromYenToPound } = require('./app.js')

    const yen = fromYenToPound(1000)

    const expected = 1000 * 0.00625; 
    
     expect(fromYenToPound(1000)).toBe(6.25);
})

