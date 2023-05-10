// Conditional statement

//if(condition){
    //execute some code here
// } else {
    //execute some code here
// }

// If hour is between 6 and 12, print "Good Morning"
// If hour is between 12 and 18, print "Good Afternoon"
// Otherwise, print "Good Evening"

var hour = 5

if(hour >=6 && hour <12){
    console.log('Good Morning')
} else if (hour >=12 && hour <18) {
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}

var ageIsMoreThanEighteen = true
var isUKcitizen = false

if (ageIsMoreThanEighteen || isUKcitizen){
    console.log('Customer is eligible for drivers license')
} else {
    console.log('Customer is NOT eligible for drivers license')
}