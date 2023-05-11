export function printAge(age){
    console.log(age)
}


// Used for Class and Methods - Lesson 15
class CustomerDetails {
    
    /**
     * This method will print the first name
     * @param {string} firstName 
     */
    printFirstName(firstName){
        console.log(firstName)
    }

    /**
     * This method will print the last name
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }

}

export const customerDetails = new CustomerDetails()