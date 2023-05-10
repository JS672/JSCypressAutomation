// Loops

//console.log('Hello World!')
// for (statement1; statement2; statement3){
//}

for (let i=0; i<5; i++){
    console.log('Hello World!' + i)
}

var vehicles = ["Volvo", "Toyota", "Tesla"]
// for of loop
for (let cars of vehicles){
   console.log(cars)
   if(cars == "Toyota"){
    break
   } 
}

//ES6 syntax for each loop
vehicles.forEach(cars => {
    console.log(cars)
});