export interface User {
    firstName:string,
    lastName:string,
    age:number,
        address: {
            street:string, 
            postCode:number,
            city:string
        }
}   