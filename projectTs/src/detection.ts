function detectType(val: number | string) {
    // return val.toLocalCase()
    if (typeof val === "string") {
       return val.toLowerCase()    
    }
    return val + 2;
}


const provideId = (id:string | null) => {
    if (!id) {
        console.log("Please Provide Id");
        return;
    }
    id.toLowerCase();
}


interface User{
    name: string,
    email: string
}
interface Admin extends User{
    isAdmin:boolean
}

const user: Admin = {
    name: "dd",
    email: "qqq",
    isAdmin:false
}

function isAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}


type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        return "Fish Food"
    } 
     return "Bird food"
}