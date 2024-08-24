import Plushie from "./Plushies";
import { StatusProduct } from "./isAvailable";

export default class Teddy extends Plushie {
    private donation: number;

    constructor(name: string, status: StatusProduct, costPrice: number) {
        super(name, status, costPrice);
        this.donation = costPrice * 0.30;
    }

    public getDonation(): number {
        return this.donation;
    }
}
