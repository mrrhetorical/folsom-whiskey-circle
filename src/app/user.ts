export class User {
    
    name: string;
    readonly email: string;
    phone: string|undefined;

    constructor(email:string, name:string, phone:string|undefined) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getName():string {
        return this.name;
    }

    setName(value:string):void {
        this.name = value;
    }

    getEmail():string {
        return this.email;
    }

    getPhone():string|undefined {
        return this.phone;
    }

    setPhone(phone:string):void {
        this.phone = phone;
    }
}