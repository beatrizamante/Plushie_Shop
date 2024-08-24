import Complex from "./Complex";
import Kawaii from "./Kawaii";
import Plushie from "./Plushies";

export default class Cart {
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

    public getCartProducts(): Plushie[] {
        return this.cartProducts;
    }
}
