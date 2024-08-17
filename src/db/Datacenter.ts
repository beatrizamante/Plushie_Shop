import Plushie from "../model/Plushies";

export default class Datacenter {
    private plushies: Plushie[] = [];

    public addNewPlushie(plushies: Plushie) : void {
        this.plushies.push(plushies);
    }

    public removeFood(id: number) : void {
    }
}