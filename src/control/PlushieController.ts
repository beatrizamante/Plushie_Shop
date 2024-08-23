import Teddy from "../model/Teddy";
import Kawaii from "../model/Kawaii";
import Complex from "../model/Complex";
import Plushie from "../model/Plushies";

export default class PlushieController {
    public createPlushie(type: string): Plushie | null {
        switch (type) {
            case "Teddy":
                return new Teddy("Teddy");

            case "Kawaii":
                return new Kawaii("Kawaii");

            case "Complex":
                return new Complex("Complex");

            default:
                console.log("Unknown plushie type.");
                return null;
        }
    }

    public addPlushieToCart(plushie: Plushie): void {
        plushie.computeSalePrice();
        console.log(`${plushie.getName()} added to cart for ${plushie.getSalePrice().toFixed(2)}.`);
    }
}
