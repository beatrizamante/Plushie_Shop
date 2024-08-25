import Cart from "./Cart";

export default class Client {
    private name: string;
    private id: number;
    private cart: Cart;
    static lastId: number = 0;

    constructor(name: string) {
        this.name = name;
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

    public getCart(): Cart {
        return this.cart;
    }

    public static idIteration(): number {
        Client.lastId += 1;
        return Client.lastId;
    }
}
