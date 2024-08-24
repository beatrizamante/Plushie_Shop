import Cart from "./Cart"; 

export default class Client {
    private name: string;
    private id: number;
    private phoneNumber: number;
    private cart: Cart;
    static lastId: number = 0;

    constructor(name: string, phoneNumber: number) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.cart = new Cart([]); 
        this.id = Client.idIteration();
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getId() : number {
        return this.id;
    }

    public getPhoneNumber(): number {
        return this.phoneNumber;
    }

    public setPhoneNumber(phoneNumber: number): void {
        if (!Number.isInteger(phoneNumber) || phoneNumber <= 0) {
            throw new Error("Invalid phone number.");
        }
        this.phoneNumber = phoneNumber;
    }

    public getCart(): Cart {
        return this.cart;
    }

    public static idIteration(): number {
        Client.lastId += 1;
        return Client.lastId;
    }
}
