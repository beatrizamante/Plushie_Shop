import PlushieController from "../control/PlushieController";
import Datacenter from "../db/Datacenter";
import Client from "../model/Client";
import Plushie from "../model/Plushies";
import Teddy from "../model/Teddy";
import Cart from "../model/Cart";

jest.mock("../db/Datacenter");
jest.mock("../model/Client");
jest.mock("../model/Plushies");
jest.mock("../model/Teddy");
jest.mock("../model/Cart");

describe('PlushieController', () => {
    let datacenter: Datacenter;
    let controller: PlushieController;
    let client: Client;
    let plushie: Plushie;

    beforeEach(() => {
        datacenter = new Datacenter();
        controller = new PlushieController(datacenter);

        client = new Client("Prof Emerson");
        client.getCart = jest.fn(() => new Cart([]));
        jest.spyOn(datacenter, 'getClientById').mockReturnValue(client);
        
        plushie = new Teddy("Teddy", 1, 50);
        jest.spyOn(plushie, 'getName').mockReturnValue('Teddy');
        jest.spyOn(plushie, 'getId').mockReturnValue(1);
        jest.spyOn(plushie, 'getCostPrice').mockReturnValue(50);

        jest.spyOn(datacenter, 'saveCart').mockImplementation(() => {});
    });

    it('Deveria adicionar um plushie pro cliente e salvar o carrinho', () => {
        const cart = client.getCart();
        const addProductSpy = jest.spyOn(cart, 'addProduct');

        controller.addProductToCart(client.getId(), plushie);

        expect(addProductSpy).toHaveBeenCalledWith(plushie);
        expect(datacenter.saveCart).toHaveBeenCalledWith(client.getId());
    });

});
