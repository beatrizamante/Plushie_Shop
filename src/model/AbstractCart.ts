import Plushie from "./Plushies";

export abstract class AbstractCart<T extends Plushie> {
    protected cartProducts: T[] = [];

    constructor(cartProducts: T[]) {
        this.cartProducts = cartProducts;
    }

    public abstract addProduct(plushie: T): void;
    public abstract removeProduct(plushie: T): void;
    public abstract calculateTotalPrice(): number;
    public abstract getCart(): T[];
}
