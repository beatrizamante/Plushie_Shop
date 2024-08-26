import Client from "../model/Client";
import Plushie from "../model/Plushies";
import Complex from "../model/Complex";
import Kawaii from "../model/Kawaii";
import Teddy from "../model/Teddy";
import { StatusProduct } from "../model/isAvailable";
import Datacenter from "../db/Datacenter";

export default class PlushieController {
    private datacenter: Datacenter;

    constructor(datacenter: Datacenter) {
        this.datacenter = datacenter;
        this.loadInitialData();
    }

    private loadInitialData(): void {
        try {
            this.datacenter.loadClients();
            this.datacenter.loadPlushies();
        } catch (error) {
            console.error("Failed to load initial data:", error);
        }
    }

    public addProductToCart(clientId: number, plushie: Plushie): void {
        try {
            const client = this.datacenter.getClientById(clientId);
            if (client) {
                const cart = client.getCart();
                cart.addProduct(plushie);
                this.datacenter.saveCart(clientId);
                console.log(`${plushie.getName()} added to cart for client ID ${clientId}.`);
            } else {
                console.log("Client not found.");
            }
        } catch (error) {
            console.error("Failed to add product to cart:", error);
        }
    }

    public removeProductFromCart(clientId: number, plushie: Plushie): void {
        try {
            const client = this.datacenter.getClientById(clientId);
            if (client) {
                client.getCart().removeProduct(plushie);
                this.datacenter.saveCart(clientId);
                console.log(`${plushie.getName()} removed from cart for client ID ${clientId}.`);
            } else {
                console.log("Client not found.");
            }
        } catch (error) {
            console.error("Failed to remove product from cart:", error);
        }
    }

    public calculateTotalPrice(clientId: number): number {
        try {
            const client = this.datacenter.getClientById(clientId);
            if (client) {
                return client.getCart().calculateTotalPrice();
            } else {
                console.log("Client not found.");
                return 0;
            }
        } catch (error) {
            console.error("Failed to calculate total price:", error);
            return 0;
        }
    }

    public registerClient(name: string): Client {
        try {
            const client = new Client(name);
            this.datacenter.addClient(client);
            this.datacenter.saveClients();
            return client;
        } catch (error) {
            console.error("Failed to register client:", error);
            throw error;
        }
    }

    public createPlushie(type: string): Plushie | null {
        try {
            let plushie: Plushie | null = null;

            switch (type) {
                case "Teddy":
                    plushie = new Teddy("Teddy", StatusProduct.active, 50);
                    break;
                case "Kawaii":
                    plushie = new Kawaii("Kawaii", StatusProduct.active, 50);
                    break;
                case "Complex":
                    plushie = new Complex("Complex", StatusProduct.active, 50);
                    break;
                default:
                    console.log("Unknown plushie type.");
                    return null;
            }

            if (plushie) {
                this.datacenter.addPlushie(plushie);
                this.datacenter.savePlushies();
                return plushie;
            }

            return null;
        } catch (error) {
            console.error("Failed to create plushie:", error);
            return null; 
        }
    }
}
