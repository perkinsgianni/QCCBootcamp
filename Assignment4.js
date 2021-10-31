// BMI calculator

console.log(`BMI Calculator`);
console.log(`\n`);

let lucasMass = 78
let lucasHeight = 1.69
let johnMass = 92
let johnHeight = 1.95

const lucasBMI = lucasMass / (lucasHeight * lucasHeight)
const johnBMI = johnMass / (johnHeight * johnHeight)

const lucasHigherBMI = lucasBMI > johnBMI

console.log(`Lucas' BMI is ${Math.round(lucasBMI)}.`)
console.log(`John's BMI is ${Math.round(johnBMI)}.`)
console.log(`Lucas' BMI is higher than John's BMI, that is ${lucasHigherBMI}.`)


// Temperature Converter

console.log(`Temperature Converter`);

var tempCelsius = 11
var tempFahrenheit = (tempCelsius * 9/5) + 32
console.log(`${tempCelsius}°C is ${Math.round(tempFahrenheit)}°F.`)

var tempFahrenheit = 64
var tempCelsius = (tempFahrenheit - 32) * 5/9
console.log(`${tempFahrenheit}°F is ${Math.round(tempCelsius)}°C.`)


// BMI statements

console.log(`Comparative BMI Statements`);

console.log(`Lucas' BMI is higher than John's!`)

if (lucasBMI > johnBMI) {
    console.log(`Lucas' BMI (${Math.round(lucasBMI)}) is higher than John's BMI (${Math.round(johnBMI)}).`);
} else {
    console.log(`John's BMI (${Math.round(johnBMI)}) is higher than Lucas' BMI (${Math.round(lucasBMI)}).`)
}
