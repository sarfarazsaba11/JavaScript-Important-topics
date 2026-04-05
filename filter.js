
// filter : array (n size) => array ( n or less size)
// let marks = [60, 40, 50, 30, 90]
// let FilterArr = marks.filter(m => m>80);

// console.log(FilterArr)
//Output
//[ 90 ]



// filter mein misi bhi elemenet ko change aur modify nhi kar sakte 
// jis array me filter apply ho raha hai agar condition true ho jati hai to wahi array return hoga warna 
//  output kch nhi ayega 

 let marks = [60, 30,55,40,90]
// let passArr = marks.filter(x => {
//     if (x >50){
//         return true;
//     }else{
//         return false
//     }
// })
// console.log(passArr)

//Output
// [ 60, 55, 90 ]

//if condition filter  mein undercover apply ho raha hai 

//=========================================================

//filter ne array hi return karni hai if even no condtion is met
// empty array return kare ga 

//filter mein to select some condition decide what we want 

// let passArr = marks.filter(x => "Lahore")
// console.log(passArr)

//filter works on boolean condition if we do nt eplictly use any condition 
//truthy and falsy values will be evaluated "Lahore" is truthy value "" empty string is falsi value so output will be empty

//output
//[ 60, 30, 55, 40, 90 ]