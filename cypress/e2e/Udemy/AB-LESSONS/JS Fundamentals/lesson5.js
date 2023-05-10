// Logical "AND"
// console.log(true && true) // All values have to be true for the expression to be TRUE

// Logical "OR"
// console.log(true || false) // Any value should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = false
var isUKcitizen = true

var eligibilityForDriversLicense = ageIsMoreThanEighteen || isUKcitizen
console.log('This customer is eligible for Drivers License: ' + eligibilityForDriversLicense)

// Logical "NOT"
console.log(!true)
console.log(6 !== 10)