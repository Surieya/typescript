// console.log("Type Script");

// class User{
//     public email: string
//     name: string
//     private readonly city:string = "chennai"
//     constructor(email:string, name:string) {
//         this.email = email;
//         this.name = name
//     }
// }


class User{
    private readonly city:string = "chennai"
    constructor(public email:string,public name:string) {}
}

const hitesh = new User("h","suri")