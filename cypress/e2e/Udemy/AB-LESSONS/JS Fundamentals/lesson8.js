// Declarative function - Can be put anywhere without declaring first
function helloOne(){
    console.log('Hello one!')
}
helloOne()

// Anoynmous function - Needs to be declared before it will run
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

//ES6 function syntax
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

// Function with arguments
function printName(name){
    console.log(name)
}
printName('John' , 'Mike')

// Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(20)
console.log(myResult)

//Importing functions (from '../JS Fundamentals/helpers/printHelper.js')
    //Package.json needed "type": "module" to be added
import { printAge } from '../JS Fundamentals/helpers/printHelper.js'
printAge(5)

//Import everything
import * as helper from '../JS Fundamentals/helpers/printHelper.js'
helper.printAge(10)