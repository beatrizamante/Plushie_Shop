import Teddy from "../model/Teddy";
import Kawaii from "../model/Kawaii";
import Complex from "../model/Complex";
import Plushie from "../model/Plushies";
import Cart from "../model/cart";

export default class PlushieController {
    public createPlushie(type: string): Plushie | null {
        switch (type) {
            case "Teddy":
                return new Teddy("Teddy", 0, 50);

            case "Kawaii":
                return new Kawaii("Kawaii", 0, 50);

            case "Complex":
                return new Complex("Complex", 0, 50);

            default:
                console.log("Unknown plushie type.");
                return null;
        }
    }

    public addPlushieToCart(plushie: Plushie): void {
        //plushie.getName();
        console.log(`${plushie.getName()} added to cart for ${aaa}.`);
    }
}
