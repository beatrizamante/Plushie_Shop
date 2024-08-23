import Plushies from "./Plushies";

export default class Kawaii extends Plushies {
    private softMaterials: string = " ";

    public getSoftMaterial() : string {
        return this.softMaterials;
    }

    public setSoftMaterial(softMaterials: string) {
        this.softMaterials = softMaterials;
    }

}