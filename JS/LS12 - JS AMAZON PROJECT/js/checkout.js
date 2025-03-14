import {
    cart,
    removeFromCart,
    updateCartQuantity,
    updateQuantity
} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { deliveryOptions } from "../data/deliveryOptions.js";
//WE EXPORT THE ESM VERSION OF JS, DEFAULT EXPORT WHEN WE NEED JUST ONE THING
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

let cartSummaryHTML = '';

//DELIVERY DAYS
const today = dayjs();
const deliveryDate = today.add(7, 'days');    //NUMBER OF TIME, LACK
console.log(deliveryDate.format('dddd, MMMM, D'));    //FORMAT FOR DAYS COMING FROM DOCUMENTATION

cart.forEach((cartItem) => {
    //NORMALAZING DATA
    const productId = cartItem.productId;//WE NEED THIS TO SEARCH FOR THE FULL PRODUCT
    let matchingProduct;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    const deliveryOptionId = cartItem.deliveryOptionId;
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });

    const today = dayjs();
    const deliveryDate = today.add(
        deliveryOption.deliveryDays,
        'days'
    );
    const dateString = deliveryDate.format(
        'dddd, MMMM, D'
    );

    cartSummaryHTML += `
        <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
                Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchingProduct.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>
                <div class="product-price">
                    ${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
                    Update
                    </span>

                    <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                    <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>

                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                    <div class="delivery-options-title">
                        Choose a delivery option:
                    </div>
                
                ${deliveryOptionsHTML(matchingProduct, cartItem)}
                
                </div>
            </div>
            </div>
    `;
    //14A - 14C
    updateCartQuantity('js-checkout-header-middle');
});

function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = '';
    deliveryOptions.forEach((deliveryOption) => {
        const today = dayjs();
        const deliveryDate = today.add(
            deliveryOption.deliveryDays,
            'days'
        );
        const dateString = deliveryDate.format(
            'dddd, MMMM, D'
        );
        const priceString = (deliveryOption.priceCents === 0) ?
            'FREE'
            :
            `$${formatCurrency(deliveryOption.priceCents)} -`
            ;

        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

        html += `
        <div class="delivery-option">
            <input type="radio" 
                ${isChecked ? 'Checked' : ''}
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
            <div>
                <div class="delivery-option-date">
                    ${dateString}
                </div>
                <div class="delivery-option-price">
                    ${priceString} Shipping
                </div>
            </div>
        </div>
        `
    });
    return html;
}

document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();
            //14A - 14C
            updateCartQuantity('js-checkout-header-middle');
        });
    });

// console.log(cartSummaryHTML);

//14F - 14H
document.querySelectorAll('.js-update-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.classList.add('is-editing-quantity');
        });
    });

document.querySelectorAll('.js-save-link')
    .forEach((link) => {
        const productId = link.dataset.productId;
        const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
        link.addEventListener('click', () => {
            updateQuantity(productId, newQuantity);
        });

        quantityInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                handleUpdateQuantity(productId, quantityInput);
            }
        });
    });

function handleUpdateQuantity(productId, quantityInput) {
    const newQuantity = Number(quantityInput.value);

    if (newQuantity <= 0 || newQuantity >= 1000) {
        alert('Quantity must be at least 1 and less than 1000');
        return;
    }

    updateQuantity(productId, newQuantity);

    const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
    quantityLabel.innerHTML = newQuantity;

    updateCartQuantity('js-checkout-header-middle');

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.classList.remove('is-editing-quantity');
}