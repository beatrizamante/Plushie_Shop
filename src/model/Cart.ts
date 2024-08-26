import Plushie from "./Plushies";
import Complex from "./Complex";
import Kawaii from "./Kawaii";
import { AbstractCart } from "./AbstractCart";

export default class Cart extends AbstractCart<Plushie> {
    constructor(cartProducts: Plushie[]) {
        super(cartProducts);
    }

    public addProduct(plushie: Plushie): void {
        console.log("Adicionado");
        this.cartProducts.push(plushie);
        console.log(`Preço: ${plushie.getCostPrice()}`);
        this.notifyClient(plushie);
    }

    public removeProduct(plushie: Plushie): void {
        this.cartProducts = this.cartProducts.filter(product => product.getId() !== plushie.getId());
    }

    public calculateTotalPrice(): number {
        console.log("Calculando o preço total...");
        console.log("Produtos no carrinho:", this.cartProducts);
        return this.cartProducts.reduce((total, plushie) => {
            let price = plushie.getCostPrice();
            if (plushie instanceof Kawaii) {
                price *= 1.65;
            } else if (plushie instanceof Complex) {
                price *= 2;
            }

            
            console.log("Preço total calculado:", total);
            return total + price;
        }, 0);

    }

    public getCartProducts(): Plushie[] {
        return this.cartProducts;
    }

    public notifyClient(message: string): void;
    public notifyClient(plushie: Plushie): void;

    public notifyClient(param: string | Plushie): void {
        if (typeof param === "string") {
            console.log(`Notificação: ${param}`);
        } else if (param instanceof Plushie) {
            console.log(`Notificação: O produto ${param.getName()} foi adicionado ao seu carrinho.`);
        }
    }
}
