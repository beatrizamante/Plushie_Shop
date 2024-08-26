import PlushieController from "../control/PlushieController";
import Datacenter from "../db/Datacenter";
import Client from "../model/Client";
import Plushie from "../model/Plushies";
import Teddy from "../model/Teddy";
import Cart from "../model/Cart";

describe('PlushieController', () => {
    let datacenter: Datacenter;
    let controller: PlushieController;
    let client: Client;
    let plushie: Plushie;
    let cart: Cart;

    beforeEach(() => {
        datacenter = new Datacenter();
        controller = new PlushieController(datacenter);

        client = new Client("Prof Emerson");
        cart = new Cart([]);
        jest.spyOn(client, 'getCart').mockReturnValue(cart);
        jest.spyOn(datacenter, 'getClientById').mockReturnValue(client);

        plushie = new Teddy("Teddy", 1, 50);
    });

    it('Adiciona Plushie no carrinho e salva', () => {
        const addProductSpy = jest.spyOn(cart, 'addProduct');
        const saveCartMock = jest.spyOn(datacenter, 'saveCart').mockImplementation(() => {});

        controller.addProductToCart(client.getId(), plushie);

        expect(addProductSpy).toHaveBeenCalledWith(plushie);
        expect(saveCartMock).toHaveBeenCalledWith(client.getId());
    });
});
