import { StatusProduct } from "./isAvailable";

export default class Plushie {
    private status: StatusProduct;
    private name: string;
    private costPrice: number;
    private id: number;
    static lastId: number = 0;

    constructor(name: string, status: StatusProduct, costPrice: number) {
        this.name = name;
        this.status = status;
        this.costPrice = costPrice;
        this.id = Plushie.idIteration();
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getCostPrice(): number {
        return this.costPrice;
    }

    public setCostPrice(costPrice: number): void {
        this.costPrice = costPrice;
    }

    public getId(): number {
        return this.id;
    }

    public getStatus(): StatusProduct {
        return this.status;
    }

    public setStatus(status: StatusProduct): void {
        this.status = status;
    }

    private static idIteration(): number {
        Plushie.lastId += 1;
        return Plushie.lastId;
    }
}
