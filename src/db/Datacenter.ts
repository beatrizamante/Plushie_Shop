import Plushie from "../model/Plushies";

export default class Datacenter {
    private plushies: Plushie[] = [];
    private id: number = 0;

    public addNewPlushie(plushie: Plushie) : void {
        this.plushies.push(plushie);
    }

    public removePlushie(id: number) : void {
        
    }

    
}