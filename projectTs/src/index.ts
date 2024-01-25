// class User{
//     email: string
//     name:string
//     constructor(email:string, name:string) {
//         this.email = email;
//         this.name = name;
//     }
// }

class User{
    constructor(
        public email: string,
        public name:string
    ) {
        
    }
}
class User1{
    constructor(
        public phno: number,
        public age:number
    ) {
        
    }
}
//classes only can extend from 1 parent
class Subuser extends User{
    
}

const sur = new User("hhh", "fff");
console.log(sur);