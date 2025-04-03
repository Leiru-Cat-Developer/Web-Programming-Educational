import { validDeliveryOptions } from "./deliveryOptions.js";

class Cart {
    cartItems;
    localStorageKey;

    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

        if (!this.cartItems) {
            this.cartItems = [
                {
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 2,
                    deliveryOptionId: '1'
                },
                {
                    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity: 1,
                    deliveryOptionId: '2'
                }
            ]; //WE ARE NOW AVAILABLE TO EXPORT THIS TO AMAZON.JS
        }
    }

    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
        let matchingItem;
        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
        const quantity = Number(quantitySelector.value);

        //WE LOOP THROUGHT THE CART TO TEST THE 3 CASES
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            this.cartItems.push({
                productId,
                quantity,
                deliveryOptionId: '1'
            });
        }
        //AFTER WE UPDATE THE CART WE SAVE TO STORAGE
        this.saveToStorage();
    }

    removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });
        //WE REPLACE THE NEW CART IN THE OLD CART
        this.cartItems = newCart;
        //AFTER WE REMOVE SMTH FROM THE CART WE SAVE TO STORAGE
        this.saveToStorage();
    }

    updateCartQuantity(className) {
        let cartQuantity = 0;

        this.cartItems.forEach((cartItem) => {
            //LOOP THROUGHT EACH ITEM IN THE CART
            cartQuantity += cartItem.quantity;
        });

        document.querySelector(`.${className}`)
            .innerHTML = cartQuantity;
    }

    updateQuantity(productId, newQuantity) {
        let productFind;
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                productFind = cartItem;
            }
        });
        productFind.quantity = newQuantity;
        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        //WE LOOP THROUGHT THE CART TO REALIZE THE 3 CASES
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if (!validDeliveryOptions(deliveryOptionId)) {
            return;
        }

        if (!matchingItem) {
            return;
        }

        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);