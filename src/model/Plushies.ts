//remember that var? : type < makes a variable optional
//readonly is a cont, don't forget
//you can intersect types with &, like PlushieKawaii with = Plushie & Kawaii
//remember you can use union types, like var: string | number
//remember to add lib: ["DOM"] in tsconfig
//if you use ! after a getElementById (or another operation), it will tell TS that that elelment will never be null
//Yo ucan use a variable as another
//check liveserver for ts 
//abstract class makes methods that can be implemented by it's children classes

import Teddy from "./Teddy";
import { StatusProduct } from "./isAvailable";

export default class Plushie {
    private name: string;
    private id: number;
    private costPrice: number = 0;
    salePrice: number = 0;
    static lastId: number = 0;

    constructor(name: string) {
        this.name = name;
        this.id = ++Plushie.lastId; 
    }

    public getName() : string {
        return this.name;
    }

    public setName(name: string) : void {
        this.name = name;
    }

    public getCostPrice() : number {
        return this.costPrice;
    }

    public setCostPrice(costPrice: number) {
        this,costPrice = costPrice;
    }

    public getSalePrice() : number {
        return this.salePrice;
    }

    public setSalePrice(salePrice: number) {
        this.salePrice = salePrice;
    }

    public computeSalePrice() : void {
    }
}



