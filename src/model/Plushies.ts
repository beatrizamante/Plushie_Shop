//remember that var? : type < makes a variable optional
//readonly is a const, don't forget
//you can intersect types with &, like PlushieKawaii with = Plushie & Kawaii
//remember you can use union types, like var: string | number
<<<<<<< HEAD
//remember that arrays like array: number[] | string[] is different from (number | string)[] << one will be one type or another the other can deal with both types
//we have tuples in TS too! They can have only one number and a string tuple: [number, string]
=======
//remember to add lib: ["DOM"] in tsconfig
//if you use ! after a getElementById (or another operation), it will tell TS that that elelment will never be null
//Yo ucan use a variable as another
//check liveserver for ts 
//abstract class makes methods that can be implemented by it's children classes
>>>>>>> f14413375bd8c345fd013b06bd58e6233731bcfb


export default class Plushie {
    private isAvailable: StatusProduct = 0;
    private name: string;
    private id: number;
    private costPrice: number = 0;
    private static currentId = 0;
    salePrice: number = 0;
<<<<<<< HEAD
=======
    static lastId: number = 0;
    private available: boolean = true;
>>>>>>> f14413375bd8c345fd013b06bd58e6233731bcfb

    constructor(name: string) {
        this.isAvailable = this.isAvailable;
        this.name = name;
        this.id = Plushie.idIteration();
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

    private static idIteration() : number {
        Plushie.currentId += 1;
        return Plushie.currentId;
    }
}



