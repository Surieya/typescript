type User = {
    name: string;
    email: string;
    isActive: boolean
}


function createNewUser(user: User): User{
    return {
        name: user.name,
        email: user.email,
        isActive:user.isActive
    }
 }

createNewUser({
    name: "",
    email: "",
    isActive:false
})

export {}