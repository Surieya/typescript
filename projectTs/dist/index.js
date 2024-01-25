"use strict";
// class User{
//     email: string
//     name:string
//     constructor(email:string, name:string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
class User1 {
    constructor(phno, age) {
        this.phno = phno;
        this.age = age;
    }
}
//classes only can extend from 1 parent
class Subuser extends User {
}
const sur = new User("hhh", "fff");
console.log(sur);
