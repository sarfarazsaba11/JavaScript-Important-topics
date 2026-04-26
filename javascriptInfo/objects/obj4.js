//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const newObj = multiplyNumeric(menu);

console.log(newObj)

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(obj){
    for (let key in obj){
       if((typeof obj[key]) == "number"){
       obj[key] = obj[key]*2
       }   
    }
    return obj      
}

// The reason your function did not work when using dot notation is that dot notation requires you to know the exact property name of the object at the time of writing the code. However, in your function, you are iterating over the keys of the object dynamically using a `for...in` loop. Since the property names are not known in advance, you must use **bracket notation** to access the properties dynamically.

// ### Explanation:
// - **Dot notation**: `obj.key` accesses the property `key` directly, but it assumes `key` is a literal property name in the object. For example, `obj.width` accesses the `width` property.
// - **Bracket notation**: `obj[key]` allows you to access properties dynamically, where `key` is a variable that holds the name of the property.

// In your function, `key` is a variable that holds the name of each property in the object during the iteration. Therefore, you must use `obj[key]` to access the value of the property dynamically.

// ### Example of why dot notation fails:
// ```javascript
// let obj = { width: 200, height: 300 };
// for (let key in obj) {
//     console.log(obj.key); // This will always be undefined because `key` is not a literal property name.
// }
// ```

// ### Correct usage with bracket notation:
// ```javascript
// let obj = { width: 200, height: 300 };
// for (let key in obj) {
//     console.log(obj[key]); // This will correctly log 200 and 300.
// }
// ```

// ### Why your function works with bracket notation:
// In your function:
// ```javascript
// if ((typeof obj[key]) == "number") {
//     obj[key] = obj[key] * 2;
// }
// ```
// Here, `obj[key]` dynamically accesses the value of the property whose name is stored in the `key` variable. This is why the function works as expected.

// If you want to use dot notation, you would need to explicitly write the property names, like this:
// ```javascript
// obj.width = obj.width * 2;
// obj.height = obj.height * 2;
// ```
// But this approach is not dynamic and only works for objects with known property names.