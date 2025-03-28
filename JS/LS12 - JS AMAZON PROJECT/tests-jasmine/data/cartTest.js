import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('TEST SUIT - addToCart', () => {
    it('Adds an existing product to the cart', () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            }]);
        });

        loadFromStorage();  //Reload the cart to start from 0

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.lenght).toEqual(undefined);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(3);
    });

    it('Adds a new product to the cart', () => {
        //Mocks === FAKE FUNCTION
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        loadFromStorage();  //Reload the cart to start from 0

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});