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
printName('John')