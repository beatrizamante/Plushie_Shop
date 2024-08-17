import { Plushie, enum } from "./Plushies";

export default class Kawaii extends Plushie {
    private softMaterials: string = " ";

    public getSoftMaterial() : string {
        return this.softMaterials;
    }

    public setSoftMaterial(softMaterials: string) {
        this.softMaterials = softMaterials;
    }

    public computeSalePrice(): void {
        super.setSalePrice(this.getCostPrice() * 2.5);
    }    


}