let array = [10,20,30,40,50]

let copyArray = array;

// this is shallow copy  both arrays are referencing to the 
// smae array . shallow copy check mutate any element of any specific array the element will be modified in
//both array.

// array[2]= 40

// console.log(`
//     ${array}: array\n
//     ${copyArray}: arrayCopy` )

//output

//  10,20,40,40,50: array

//  10,20,40,40,50:  arrayCopy


//===============================================

//to make deep copy we use spread operators

let newArr = [...array]


//==============================================

// let product = {
//     id:1,
//     title:"Mobile Phone",
//     price:5000,
//     isAvail:ture
// }

// let copyProduct = {...product}


//==============================================

// in case of nesting in array or objects 
// spread operators work only in first layes .i.e nest element will be still shallow copy 

// let product = {
//     id:1,
//     title:"Mobile Phone",
//     price:5000,
//     isAvail:true,
//     color:["red","blue","yellow"]

// }
// let copyProduct = {...product}

// product.color[0] ="orange";
// console.log(
//     `JSON.stringfy(${product } ) Product \n 
//     ${copyProduct} Copy`
// )

// console.log(
//     `Product: ${JSON.stringify(product)} \nCopy: ${JSON.stringify(copyProduct)}`
// );

//Product: {"id":1,"title":"Mobile Phone","price":5000,"isAvail":true,"color":["orange","blue","yellow"]}
//Copy: {"id":1,"title":"Mobile Phone","price":5000,"isAvail":true,"color":["orange","blue","yellow"]}
///=====================================================================================================================

// To avoid shallow copy and nested level we will use structured Clone

// let product = {
//     id:1,
//     title:"Mobile Phone",
//     price:5000,
//     isAvail:true,
//     color:["red","blue","yellow"]

// }


// let copyProduct = structuredClone(product)
// product.color[0] ="orange";

// console.log(
//     `Product: ${JSON.stringify(product)} \nCopy: ${JSON.stringify(copyProduct)}`
// );


// Product: {"id":1,"title":"Mobile Phone","price":5000,"isAvail":true,"color":["orange","blue","yellow"]}
// Copy: {"id":1,"title":"Mobile Phone","price":5000,"isAvail":true,"color":["red","blue","yellow"]}