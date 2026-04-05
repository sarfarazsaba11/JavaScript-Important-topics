



let marks = [ 30, 50, 60, 80, 45, 15]

//marks.forEach(mark => console.log(mark))

//Output
// 30
// 50
// 60
// 80
// 45
// 15
 
// ======================================================

// marks.forEach((mark)=>{
//     let percentage = (mark/100)*100;
//     if(percentage >33){
//         console.log(`marks:${mark}, Congratulation you scored ${percentage} percentage.`)
//     }

// })

//Output
// marks:50, Congratulation you scored 50 percentage.
// marks:60, Congratulation you scored 60 percentage.
// marks:80, Congratulation you scored 80 percentage.
// marks:45, Congratulation you scored 45 percentage.
 
// ====================================================

// let ans = for(let i=0 ; i<marks.length; i++){

//     console.log(marks[i])
// }

// above logic is incorect because  for loop is statement  that do not return any thing.
// forloop is an expression that can return any thing may return void.
// statement can not be assigned to variable while expresion can be assigned to variable.

// let ans = marks.forEach((mark)=>{
//     let percentage = (mark/100)*100;
//     if(percentage >33){
//          return (`marks:${mark}, Congratulation you scored ${percentage} percentage.`)
//     }
// }
// )

//console.log(ans)
// for Each does not return anything so varoable answer will be undefine 

// ============================================================

