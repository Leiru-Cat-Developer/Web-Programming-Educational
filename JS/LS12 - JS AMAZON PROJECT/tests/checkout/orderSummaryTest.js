import { renderOrderSummary } from "../../js/checkout/orderSummary.js";
import { cart, loadFromStorage } from "../../data/cart.js";

describe('TEST SUIT - renderOrderSummary', () => {
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

    //HOOK
    beforeEach(() => {
        spyOn(localStorage, 'setItem');

        document.querySelector('.js-test-order-summary')
            .innerHTML = `
                <div class ="js-order-summary"></div>
                <div class ="js-payment-summary"><div>
                <div class ="js-checkout-header"><div>
            `;
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                    productId: productId1,
                    quantity: 2,
                    deliveryOptionId: '1'
                },
                {
                    productId: productId2,
                    quantity: 1,
                    deliveryOptionId: '2'
                }
            ]);
        });

        loadFromStorage();
        renderOrderSummary();
    });

    //HOOK
    afterEach(() => {
        document.querySelector('.js-test-order-summary')
            .innerHTML = '';
    });

    it('Displays the cart', () => {
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);
        expect(
            document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain('Quantity: 2');
        expect(
            document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain('Quantity: 1');

        //16G
        expect(
            document.querySelector(`.js-product-name-${productId1}`).innerText
        ).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
        expect(
            document.querySelector(`.js-product-name-${productId2}`).innerText
        ).toEqual('Intermediate Size Basketball');

        //16H
        expect(
            document.querySelector(`.js-product-price-${productId1}`).innerText
        ).toEqual('$10.90');
        expect(
            document.querySelector(`.js-product-price-${productId2}`).innerText
        ).toEqual('$20.95');
    });

    it('Delete an element', () => {
        document.querySelector(`.js-delete-quantity-${productId1}`).click();
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(1);
        expect(
            document.querySelector(`.js-cart-item-container-${productId1}`)
        ).toEqual(null);
        expect(
            document.querySelector(`.js-cart-item-container-${productId2}`)
        ).not.toEqual(null);
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual(productId2);

        //16G
        expect(
            document.querySelector(`.js-product-name-${productId2}`).innerText
        ).toEqual('Intermediate Size Basketball');

        //16H
        expect(
            document.querySelector(`.js-product-price-${productId2}`).innerText
        ).toEqual('$20.95');
    });

    //16I
    it('Updating delivery option' ,() => {
        document.querySelector(`.js-delivery-option-input-${productId1}-3`).click();

        expect(
            document.querySelector(`.js-delivery-option-input-${productId1}-3`).checked
        ).toEqual(true);

        expect(cart.length).toEqual(2);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([
            {
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '3'
            },
            {
                productId: productId2,
                quantity: 1,
                deliveryOptionId: '2'
            }
        ]));

        expect(
            document.querySelector('.js-payment-summary-shipping').innerText
        ).toContain('$14.98');
        expect(
            document.querySelector('.js-payment-summary-total').innerText
        ).toContain('$63.50');
    });
});