// map function is applied on arra and it will return an array
//map: array => array

// value swill transorm in new modified values 

let temps = [33,35, 32, 25, 24,26];

// let modifyTemp = temps.map((temp, index ) =>{
//     console.log(temp)
//     return temp+10;
// })

// console.log(modifyTemp)

//output 
// modifyTemp[ 43, 45, 42, 35, 34, 36 ]

// =======================================================

//let modifyTemp = temps.map((temp, index) =>temp+10 );

// if we need to return  only one line of code then we will omit { } and there is no need to use return keyword

//console.log(modifyTemp)


//================================================

// sir example

 let marks = [7,3,4,5,6];
// let mappedArr = marks.map(x => {
//     x = x*x;
//     x+2;
// })


//return use nhi kia is lye undefine aye ga mappedArr mein


//=================================================


// let marks = [60, 30, 55, 40,90]
// let marksArr = marks.map(x => x>5);
// console.log(marksArr)


//[ true, true, true, true, true ]

//=================================================


// deep  copy of array can be made using map , because map foncyion creates a new array
//it does not modify the original array . Memory will have to diffeent referne of that respective array.

// let marks = [60, 30, 55, 40,90]
// let marksArr = marks.map(x => x>50 ? "greater" : "lesser" );
// console.log(marksArr)

// =================================================


// let passArr = marks.map((x) => {
//     if(x>5) {

//         return x
//     } 

// })

// console.log(passArr)



//output
//[ 7, undefined, undefined, undefined, 6 ]

// if condtion true value will be written if false undefine will be return 


// map function limition is that if you some output after applying any condition it 
// it is not possible we will have to use filter method it return an array that inludes element that meet 
// the condition and skip element that fails to meet the condition.