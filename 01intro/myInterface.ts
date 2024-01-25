interface User {
    readonly dbId:number,
    email: string,
    userId: number
    googleId?: string
    // startTrail:() => string
    startTrail(): string
    getCoupon(couponame:string):number,
}

interface User {
    githubToken?:string,
}

interface Admin extends User{
    role:"admin" | "ta" | "learner"
}

const surieya: User = {
    dbId:123413,
    email: 'surieya@gmail.com',
    userId: 1232,
    startTrail: () => "start Trail",
    getCoupon:(name:"suri") => 10,
}

export {}