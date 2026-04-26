//We have an object storing salaries of our team:
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}


function calSum(obj){
    let sum = 0

    for (let key in obj){
        sum  += obj[key]

    }

    return sum 
}


const total = calSum(salaries)

console.log(total)

