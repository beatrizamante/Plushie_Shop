import promptSync from "prompt-sync";
import PlushieController from "../control/PlushieController";
import Plushie from "../model/Plushies";

export default class PrimaryScreen {
    private prompt = promptSync();
    private controller: PlushieController;

    constructor(controller: PlushieController) {
        this.controller = controller;
    }

    public display(): void {
        let showScreen: boolean = false;

        while (!showScreen) {
            let choice = this.prompt("Escolha:\n1 - Comprar\n2 - Cadastrar\n3 - Sair\n> ");

            switch (choice) {
                case "1":
                    this.choosePlushie();
                    break;

                case "2":
                    this.registerClient();
                    break;

                case "3":
                    this.returnStart();
                    showScreen = true;
                    break;

                default:
                    console.log("Escolha inválida.");
            }
        }
    }

    private choosePlushie(): void {
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
            this.controller.addPlushieToCart(plushie);
        }
    }

    private registerClient(): void {
        console.log("Cliente registrado.");
    }

    private returnStart(): void {
        console.log("Voltando ao início...");
    }
}
