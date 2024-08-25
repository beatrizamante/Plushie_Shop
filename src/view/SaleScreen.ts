import promptSync from "prompt-sync";
import PlushieController from "../control/PlushieController";
import Plushie from "../model/Plushies";
import Client from "../model/Client";

export default class PrimaryScreen {
    private prompt = promptSync();
    private controller: PlushieController;
    private currentClient: Client | null = null;

    constructor(controller: PlushieController) {
        this.controller = controller;
    }

    public display(): void {
        let showScreen: boolean = false;

        while (!showScreen) {
            try {
                let choice = this.prompt("Escolha:\n1 - Comprar\n2 - Cadastrar\n3 - Sair\n> ");

                switch (choice) {
                    case "1":
                        if (this.currentClient) {
                            this.choosePlushie();
                        } else {
                            console.log("Nenhum cliente registrado.");
                        }
                        break;

                    case "2":
                        const name = this.prompt("Digite o nome do cliente: ");
                        this.currentClient = this.controller.registerClient(name);
                        if (this.currentClient) {
                            console.log(`Cliente ${this.currentClient.getName()} registrado com sucesso!`);
                        }
                        break;

                    case "3":
                        this.returnStart();
                        showScreen = true;
                        break;

                    default:
                        console.log("Escolha inválida.");
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.error("Ocorreu um erro:", error.message);
                } else {
                    console.error("Ocorreu um erro desconhecido");
                }
            }
        }
    }

    private choosePlushie(): void {
        try {
            console.log("Escolha:\n1 - Teddy\n2 - Kawaii\n3 - Complex\n4 - Sair");
            let plushType = this.prompt("> ");
            let plushie: Plushie | null = null;

            switch (plushType) {
                case "1":
                    plushie = this.controller.createPlushie("Teddy");
                    break;

                case "2":
                    plushie = this.controller.createPlushie("Kawaii");
                    break;

                case "3":
                    plushie = this.controller.createPlushie("Complex");
                    break;

                case "4":
                    this.returnStart();
                    return;

                default:
                    console.log("Tipo de ursinho desconhecido.");
                    return;
            }

            if (plushie) {
                this.controller.addProductToCart(this.currentClient!.getId(), plushie);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Ocorreu um erro ao escolher um ursinho:", error.message);
            } else {
                console.error("Ocorreu um erro desconhecido ao escolher um ursinho.");
            }
        }
    }

    private returnStart(): void {
        try {
            if (this.currentClient) {
                const cart = this.currentClient.getCart();
                console.log("Resumo do Carrinho:");
                cart.getCartProducts().forEach(product => {
                    console.log(`- ${product.getName()}`);
                });
                console.log(`Preço Total: ${cart.calculateTotalPrice()}`);
            }
            console.log("Voltando ao início...");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Ocorreu um erro ao retornar ao início:", error.message);
            } else {
                console.error("Ocorreu um erro desconhecido ao retornar ao início.");
            }
        }
    }
}
