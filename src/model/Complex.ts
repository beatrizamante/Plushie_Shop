import Plushie from "./Plushies";

export default class Complex extends Plushie {
    private bodyShape: string = " ";

    public getBodyShapel() : string {
        return this.bodyShape;
    }

    public setBodyShape(bodyShape: string) {
        this.bodyShape = bodyShape;
    }

}