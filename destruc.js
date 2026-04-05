let product = {
    id:1,
    title:"Mobile Phone",
    price:5000,
    isAvail:true,
    color:["red","blue","yellow"]

}


// let title = product.title;
// let price = product.price;

// console.log(title,price)


// We use destructue or extraction to get any property it will safe us writing more line of code

//let  {title,price}  = product;

// Rest operators


let  {title,price:p,stock=0, ...others}  = product;

//if we destruct any property which do not exist it will initialze with undefined.


//===================
// Spread rest and destruct can also be appliedon array

let array = [10,20,30,40]

// let x=  array[0]
// let y=  array[1]


let [x,,y,...rest] = array



