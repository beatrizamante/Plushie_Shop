import Client from "../model/Client";
import Plushie from "../model/Plushies";
import { LocalStorage } from 'node-localstorage';

const localStorage = new LocalStorage('./scratch');

export default class Datacenter {
    private clients: Client[] = [];
    private plushies: Plushie[] = [];

    public addClient(client: Client): void {
        this.clients.push(client);
    }

    public addPlushie(plushie: Plushie): void {
        this.plushies.push(plushie);
    }

    public saveClients(): void {
        try {
            localStorage.setItem("clients", JSON.stringify(this.clients.map(client => ({
                id: client.getId(),
                name: client.getName(),
                cart: client.getCart().getCartProducts().map(plushie => ({
                    id: plushie.getId(),
                    name: plushie.getName(),
                    status: plushie.getStatus(),
                    costPrice: plushie.getCostPrice()
                }))
            }))));
            console.log("Clientes salvos no localStorage");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Falha ao salvar clientes:", error.message);
            } else {
                console.error("Falha ao salvar clientes devido a um erro desconhecido.");
            }
        }
    }

    public loadClients(): void {
        try {
            const storedClients = localStorage.getItem("clients");
            if (storedClients) {
                const clientsData = JSON.parse(storedClients);
                const previousLastId = Client.lastId;
                this.clients = clientsData.map((clientData: any) => {
                    const client = new Client(clientData.name);
                    client['id'] = clientData.id;
                    const cart = client.getCart();
                    clientData.cart.forEach((plushieData: any) => {
                        const plushie = new Plushie(plushieData.name, plushieData.status, plushieData.costPrice);
                        cart.addProduct(plushie);
                    });
                    return client;
                });
                Client.lastId = previousLastId;
                console.log("Clientes carregados do localStorage");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Falha ao carregar clientes:", error.message);
            } else {
                console.error("Falha ao carregar clientes devido a um erro desconhecido.");
            }
        }
    }

    public savePlushies(): void {
        try {
            localStorage.setItem("plushies", JSON.stringify(this.plushies));
            console.log("Ursinhos salvos no localStorage");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Falha ao salvar ursinhos:", error.message);
            } else {
                console.error("Falha ao salvar ursinhos devido a um erro desconhecido.");
            }
        }
    }

    public loadPlushies(): void {
        try {
            const storedPlushies = localStorage.getItem("plushies");
            if (storedPlushies) {
                this.plushies = JSON.parse(storedPlushies).map((plushieData: any) => {
                    return new Plushie(plushieData.name, plushieData.status, plushieData.costPrice);
                });
                console.log("Ursinhos carregados do localStorage");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Falha ao carregar ursinhos:", error.message);
            } else {
                console.error("Falha ao carregar ursinhos devido a um erro desconhecido.");
            }
        }
    }

    public getClientById(clientId: number): Client | undefined {
        return this.clients.find(client => client.getId() === clientId);
    }

    public saveCart(clientId: number): void {
        try {
            const client = this.getClientById(clientId);
            if (client) {
                localStorage.setItem(`cart_${clientId}`, JSON.stringify(client.getCart().getCartProducts()));
                console.log(`Carrinho do cliente com ID ${clientId} salvo`);
            } else {
                console.log("Cliente não encontrado.");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Falha ao salvar o carrinho do cliente com ID ${clientId}:`, error.message);
            } else {
                console.error(`Falha ao salvar o carrinho do cliente com ID ${clientId} devido a um erro desconhecido.`);
            }
        }
    }

    public loadCart(clientId: number): void {
        try {
            const storedCart = localStorage.getItem(`cart_${clientId}`);
            if (storedCart) {
                const products = JSON.parse(storedCart);
                const client = this.getClientById(clientId);
                if (client) {
                    products.forEach((plushieData: any) => {
                        const plushie = new Plushie(plushieData.name, plushieData.status, plushieData.costPrice);
                        client.getCart().addProduct(plushie);
                    });
                    console.log("Carrinho carregado");
                } else {
                    console.log("Cliente não encontrado.");
                }
            } else {
                console.log("Carrinho não encontrado.");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Falha ao carregar o carrinho do cliente com ID ${clientId}:`, error.message);
            } else {
                console.error(`Falha ao carregar o carrinho do cliente com ID ${clientId} devido a um erro desconhecido.`);
            }
        }
    }
}
