// const user = {
//     name: "surieya",
//     email: "surieya@gmail.com",
//     isActive:true
// }


// type User = {
//     name: string
//     email: string
//     isActive:boolean
// }

// function createUser(user:User):User {
//     return {
//         name: user.name,
//         email: user.email,
//         isActive:user.isActive
//     }
// }
// function createCourse(): {}{
//     return {}
// }

// createUser({ name: "surieya", email:"suri@gmail.com",isActive:true});

type User = {
    readonly _id:string
    name: string
    email: string
    isActive: boolean
    credCardDetails?:number
}

type cardNumber = {
    cardnumber:string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

let myUser: User = {
    _id: "1234",
    name: "h",
    email: "s@S",
    isActive: true,
    credCardDetails : 1234
}




export {}