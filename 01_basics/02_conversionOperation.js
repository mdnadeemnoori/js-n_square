//understanding the type of data...
// assigning/declaring the data ....
let playScore = 89
const playScore1 = "8adc"
// checking the type of the variable...
console.log(typeof playScore); //method 1 to check the type of variable
console.log(typeof(playScore1));

//converting the declared data type into other data type or typecasting

let valueInNumber = Number(playScore1)
console.log(typeof(valueInNumber));
// checking that wether the values has been converted into number or not..
console.log(valueInNumber); //------if it is string data type and have done typecasting on it, will return the value as NaN.
