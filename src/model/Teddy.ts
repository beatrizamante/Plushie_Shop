import Plushie from "./Plushies";

export default class Teddy extends Plushie {
    private donation: number = 0;

    public computeSalePrice(): void {
        super.setSalePrice(this.getCostPrice() * 1.5);
    }    

    public Donation() : number {
        this.computeSalePrice()
        return (this.getSalePrice() * 0.35)
    }


}