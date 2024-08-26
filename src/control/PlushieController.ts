import Client from "../model/Client";
import Plushie from "../model/Plushies";
import Complex from "../model/Complex";
import Kawaii from "../model/Kawaii";
import Teddy from "../model/Teddy";
import { StatusProduct } from "../model/isAvailable";
import Datacenter from "../db/Datacenter";
import MyError from "../services/MyError";

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
            throw new MyError("Algo deu errado!");
        }
    }

    public addProductToCart(clientId: number, plushie: Plushie): void {
        try {
            const client = this.datacenter.getClientById(clientId);
            if (client) {
                const cart = client.getCart();
                cart.addProduct(plushie);
                this.datacenter.saveCart(clientId);
                console.log(`${plushie.getName()} adicionado ao carrinho do cliente ID ${clientId}.`);
            } else {
                console.log("Cliente não encontrado.");
            }
        } catch (error) {
            throw new MyError("Algo deu errado!");
        }
    }

    public removeProductFromCart(clientId: number, plushie: Plushie): void {
        try {
            const client = this.datacenter.getClientById(clientId);
            if (client) {
                client.getCart().removeProduct(plushie);
                this.datacenter.saveCart(clientId);
                console.log(`${plushie.getName()} removido do carrinho do cliente ID ${clientId}.`);
            } else {
                console.log("Cliente não encontrado.");
            }
        } catch (error) {
            throw new MyError("Algo deu errado!");
        }
    }

    public calculateTotalPrice(clientId: number): number {
        try {
            const client = this.datacenter.getClientById(clientId);
            if (client) {
                return client.getCart().calculateTotalPrice();
            } else {
                console.log("Cliente não encontrado.");
                return 0;
            }
        } catch (error) {
            throw new MyError("Algo deu errado!");
        }
    }

    public registerClient(name: string): Client {
        try {
            const client = new Client(name);
            this.datacenter.addClient(client);
            this.datacenter.saveClients();
            return client;
        } catch (error) {
            throw new MyError("Algo deu errado!");
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
                    console.log("Tipo de ursinho desconhecido.");
                    return null;
            }

            if (plushie) {
                this.datacenter.addPlushie(plushie);
                this.datacenter.savePlushies();
                return plushie;
            }

            return null;
        } catch (error) {
            throw new MyError("Algo deu errado!");
        }
    }
}
