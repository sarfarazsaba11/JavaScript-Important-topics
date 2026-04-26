//const user = []
// const student ={
//     name:"saba", 
//     email:"saba@gmail.com",
//     address:{
//         city:"karachi"
//     }
// }

//property, method?
function User(userName2, email2, password2, role2){
    this.userName = userName2;
    this.email = email2;
    this.password = password2;
   // instance function
    this.role = role2;
}

User.prototype.info = function(){
    console.log(`${this.userName}`)
};
User.prototype.register =  function(){
       console.log("register function invoked")
    } 

             User
//object --> class fisrtchild ---> child class inheriatance

User.prototype.login = function(){
       console.log("login function invoked")
    }     

const admin = new User("Usama", "usama@gmail.com","abc", "admin")
const manager = new  User("Haris", "haris@gmail.com","abc","manager")


// memory leaks : Program takes more memory than available in the ram .

//[[prototype]] is the hidden link property inside the instance of constructor function
// that is responsible to create the prototypal chain  back to the core javascript Object constructor

function Admin(userName, email, password, role, age){
    User.call(this,userName, email, password, role)
    this.age = age;   
}
//call user inside the admin function ---> this

Admin.prototype = Object.create(User.prototype)//
Admin.prototype.constructor = Admin //overide User constructor
Admin.prototype.assignRole = function(email, role){
     let  newUser 
    user.forEach((user)=>{
        if(user.email === email ){
            newUser = {...newUser, role} 
        }
    })
    user = [...user, newUser]

}
const admin1 = new Admin("hanan", "hanna@gmail.com", "abc", "admin")

//user --> admin --> manager -->sab k actions 
//every constructor function must live inside its prototype object
//we can get it by calling coonstructor name.prototype.constuctor

//backlinkng of constructor  to itself

User.profile = function(admin){
  admin.login()
 console.log(`${admin.email}`)
}

User.profile(admin)

//limitation of js constructor function