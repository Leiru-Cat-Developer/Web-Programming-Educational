export const cart = []; //WE ARE NOW AVAILABLE TO EXPORT THIS TO AMAZON.JS

export function addToCart(productId) {
    let matchingItem;

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

    const quantity = Number(quantitySelector.value);

    //WE LOOP THROUGHT THE CART TO REALIZE THE 3 CASES
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId,
            quantity
        });
    }
}