import promptSync from "prompt-sync";
import Plushie from "../model/Plushies";

export default class PrimaryScreen{
    private prompt = promptSync(); 

    public getFirstScreen(plushie: Plushie) : void {
        let showScreen: boolean = false;

        while(!showScreen) {
            let choice = this.prompt("Escolha:\n1 - Comprar\n2 - Cadastrar\n3 - Sair")

            switch(choice) {
                case "1":
                    this.choosePlushie(plushie);  
                    
                    break;

                case "2": 
                    this.registerClient();
                    }

                    
            }


        }

        public choosePlushie(plushie: Plushie) : void {
            console.log("Escolha:\n1 - Teddy\n2 - Kawaii\n3 - Complex\n4 - Sair");
            let plushType = this.prompt("> ");
                switch(plushType) {
                    case "1":

                }
        }
        public registerClient() : void {
        }
    }