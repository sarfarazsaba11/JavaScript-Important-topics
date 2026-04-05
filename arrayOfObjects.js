let products = [

    {
    id:1,
    title:"Mobile Phone",
    price:5000,
    isAvail:true,
    color:["red","blue","yellow"]

},
{
    id:2,
    title:"Mobile Phone",
    price:5000,
    isAvail:true,
    color:["red","blue","yellow"]

},
 {
    id:3,
    title:"Mobile Phone",
    price:5000,
    isAvail:true,
    color:["red","blue","yellow"]

}
]


let [p,...rest] = products;

let copyProducts = structuredClone(products);

copyProducts[2].price= 8000;


// let copyProducts1 = products.map(p => ({...p}))

let copyProducts1 = products.map(p => p.id === 3 ? {...p.price=8000} : {...p})



// suppose we have an object if want to make deep copy of that object we use ...spread operator in {}
let detail = {
    firstName:"Ahmed",
    age:30,
    education:"Diploma in engineering"

}

// let detailCopy = {...detail}

// console.log(detailCopy)


// if we want to overide any proerty first we spread the object put ", " reassign the proerty with new value 

// let detailCopy = {...detail, education :"Doctor"}
// console.log(detailCopy)

//ouput
// { firstName: 'Ahmed', age: 30, education: 'Doctor' }

// let detailCopy = {...detail, age: detail.age +4}
// console.log(detailCopy)

// we can also use ... operator to combine to object and ake a deep topic of it 

let prod={
    id:1,
    title:"Mobile",
    colors:{
        name:["red", "yellow"],
        price:5000

    }
        
    
}

let vendor = {
    id:1,
    name:"ABC",
    mobileNo:3021456239
}

let combineObj = {...prod, ...vendor}

let newProd = {...prod, id: 2,colors:{...prod.colors,price:4000} }



// if object has nested elements and we want to modify that property we have to destructure nested property first then 
//modify it's respected property



// Agar function ek object return kar raha hai to hum return values ko destructure kar sakte hain 

function f(){
    let prod={
        id:1,
        title:"Mobile",
        colors:{
            name:["red", "yellow"],
            price:5000
        }
    }

    return prod

}

let ans = f()

 let {id, title,...rest1} = f()

 // passing an object to a function , object has so many properties if our fnction need 
 // only specific property we can use destructuring property


  let prod1={
        id:1,
        title:"Mobile",
        colors:{
            name:["red", "yellow"],
            price:5000
        }
    }

    function PrintProdTitle({title, colors:{price},...rem}){
        console.log(title)
        console.log(price)
        console.log(rem)

    }

    PrintProdTitle(prod1)
