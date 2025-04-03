import {
    cart,
    removeFromCart,
    updateQuantity,
    updateDeliveryOption
} from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { deliveryOptions, getDeliveryOption, calculateDeliveryDate } from "../../data/deliveryOptions.js";
//WE EXPORT THE ESM VERSION OF JS, DEFAULT EXPORT WHEN WE NEED JUST ONE THING
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { renderPaymentSummary } from "./paymentSummary.js";
import { renderCheckoutHeader } from "./checkoutHeader.js";

export function renderOrderSummary() {

    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {
        //NORMALAZING DATA
        const productId = cartItem.productId;//WE NEED THIS TO SEARCH FOR THE FULL PRODUCT
        const matchingProduct = getProduct(productId);

        const deliveryOptionId = cartItem.deliveryOptionId;
        const deliveryOption = getDeliveryOption(deliveryOptionId);

        const dateString = calculateDeliveryDate(deliveryOption);

        cartSummaryHTML += `
            <div class="cart-item-container 
            js-cart-item-container
            js-cart-item-container-${matchingProduct.id}">
                <div class="delivery-date">
                    Delivery date: ${dateString}
                </div>

                <div class="cart-item-details-grid">
                    <img class="product-image"
                    src="${matchingProduct.image}">

                    <div class="cart-item-details">
                    <div class="product-name js-product-name-${matchingProduct.id}">
                        ${matchingProduct.name}
                    </div>
                    <div class="product-price js-product-price-${matchingProduct.id}">
                        ${matchingProduct.getPriceCents()}
                    </div>
                    <div class="product-quantity js-product-quantity-${matchingProduct.id}">
                        <span>
                        Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                        </span>
                        <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
                        Update
                        </span>

                        <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                        <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>

                        <span class="delete-quantity-link js-delete-quantity-${matchingProduct.id} link-primary js-delete-link" data-product-id="${matchingProduct.id}">
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
        // //14A - 14C
        // updateCartQuantity('js-checkout-header-middle');
    });

    function deliveryOptionsHTML(matchingProduct, cartItem) {
        let html = '';
        deliveryOptions.forEach((deliveryOption) => {
            const dateString = calculateDeliveryDate(deliveryOption);
            const priceString = (deliveryOption.priceCents === 0) ?
                'FREE'
                :
                `$${formatCurrency(deliveryOption.priceCents)} -`
                ;

            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

            html += `
            <div class="delivery-option js-delivery-option js-delivery-option-${matchingProduct.id}-${deliveryOption.id}" data-product-id = "${matchingProduct.id}" data-delivery-option-id = "${deliveryOption.id}">
                <input type="radio" 
                    ${isChecked ? 'Checked' : ''}
                    class="delivery-option-input js-delivery-option-input-${matchingProduct.id}-${deliveryOption.id}"
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

        // updateCartQuantity('js-checkout-header-middle');

        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.classList.remove('is-editing-quantity');
    }

    document.querySelector('.js-order-summary')
        .innerHTML = cartSummaryHTML;

    document.querySelectorAll('.js-delete-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const productId = link.dataset.productId;
                removeFromCart(productId);
                //15H
                renderCheckoutHeader();
                renderOrderSummary();
                renderPaymentSummary();
                //14A - 14C
                // updateCartQuantity('js-checkout-header-middle');
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
            link.addEventListener('click', () => {
                const productId = link.dataset.productId;

                const container = document.querySelector(
                    `.js-cart-item-container-${productId}`
                );
                container.classList.remove('is-editing-quantity');

                const quantityInput = document.querySelector(
                    `.js-quantity-input-${productId}`
                );
                const newQuantity = Number(quantityInput.value);
                updateQuantity(productId, newQuantity);

                renderCheckoutHeader();
                renderOrderSummary();
                renderPaymentSummary();

                // We can delete the code below (from the original solution)
                // because instead of using the DOM to update the page directly
                // we can use MVC and re-render everything. This will make sure
                // the page always matches the data.
            });
        });

    document.querySelectorAll('.js-delivery-option')
        .forEach((element) => {
            element.addEventListener('click', () => {
                //SHORTCUT
                const { productId, deliveryOptionId } = element.dataset;
                //UPDATE DELIVERYOPTION ID
                updateDeliveryOption(productId, deliveryOptionId);
                renderPaymentSummary();
                renderOrderSummary();
            });
        });
}