let score: number | string = 33


type User = {
    name: string;
    id: number
}

type Admin = {
    username: String;
    id: number;
}

let user: User | Admin = {
    name: "e",
    username:"s",
    id:1
}


function getDbId(id: number | string) {
    console.log(`DB id is : ${id}`)
}



getDbId(3);
getDbId("3")

const data: (number | string)[] = [1, 2, 3, "4"]

//either a number array or a string array
const data1:number[] | string[] = [1,2,3]

