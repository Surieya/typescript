
type User = {
    readonly id: number[]
    readonly name: string
    details?:number
}

let user: User = {
    id: [1],
    name:"s"
}

user.id.push(2);

export{}