import Client from "../model/Client";
import Plushie from "../model/Plushies";
import Complex from "../model/Complex";
import Kawaii from "../model/Kawaii";
import Teddy from "../model/Teddy";
import { StatusProduct } from "../model/isAvailable";

export default class Cart {
    private clients: Map<number, Client> = new Map();
    private cartProducts: Plushie[] = [];

    constructor(cartProducts: Plushie[]) {
        this.cartProducts = cartProducts;
    }

    public addProduct(plushie: Plushie): void {
        this.cartProducts.push(plushie);
    }

    public removeProduct(plushie: Plushie): void {
        this.cartProducts = this.cartProducts.filter(product => product.getId() !== plushie.getId());
    }

    public calculateTotalPrice(): number {
        return this.cartProducts.reduce((total, plushie) => {
            let price = plushie.getCostPrice();
            if (plushie instanceof Kawaii) {
                price *= 1.65;
            } else if (plushie instanceof Complex) {
                price *= 2;
            }
            return total + price;
        }, 0);
    }
    
    public registerClient(name: string, phoneNumber: number): Client {
        const client = new Client(name, phoneNumber);
        this.clients.set(client.getId(), client);
        console.log(`Client registered with ID ${client.getId()}.`);
        return client;
    }

    public getCartProducts(): Plushie[] {
        return this.cartProducts;
    }

    public addPlushieToCart(clientId: number, plushie: Plushie): void {
        const client = this.clients.get(clientId);
        if (client) {
            client.getCart().addProduct(plushie);
            console.log(`${plushie.getName()} added to cart for client ID ${clientId}.`);
        } else {
            console.log("Client not found.");
        }
    }

    public createPlushie(type: string): Plushie | null {
        switch (type) {
            case "Teddy":
                return new Teddy("Teddy", StatusProduct.active, 50); 
            case "Kawaii":
                return new Kawaii("Kawaii", StatusProduct.active, 50); 
            case "Complex":
                return new Complex("Complex", StatusProduct.active, 50); 
            default:
                console.log("Unknown plushie type.");
                return null;
        }
    }

}
