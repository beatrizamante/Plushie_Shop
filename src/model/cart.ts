import Client from "./Client";
import Plushie from "./Plushies";

export default class Cart{
    cartProducts: string[] = []

    constructor(cartProducts: string[]) {
        this.cartProducts = cartProducts;
    }
}