import Plushie from "./Plushies";
import { AbstractCart } from "./AbstractCart";
import Kawaii from "./Kawaii";
import Complex from "./Complex";

export class PremiumCart extends AbstractCart<Plushie> {
    constructor(cartProducts: Plushie[]) {
        super(cartProducts);
    }

    public addProduct(plushie: Plushie): void {
        this.cartProducts.push(plushie);
        this.notifyClient(plushie); 
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

    public getCartProducts(): Plushie[] {
        return this.cartProducts;
    }

    public notifyClient(message: string): void;
    public notifyClient(plushie: Plushie): void;

    public notifyClient(param: string | Plushie): void {
        if (typeof param === "string") {
            console.log(`Notificação Premium: ${param}`);
        } else if (param instanceof Plushie) {
            console.log(`Notificação Premium: O produto ${param.getName()} (premium) foi adicionado ao seu carrinho.`);
        }
    }
}
