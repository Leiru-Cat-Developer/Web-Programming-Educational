import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import formatCurrency from "../utils/money.js";
import { renderCheckoutHeader } from "./checkoutHeader.js";
import { addOrder } from "../../data/orders.js";

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;

    cart.forEach((cartItem) => {
        //ITEMS
        const matchingProduct = getProduct(cartItem.productId);
        productPriceCents += (matchingProduct.priceCents * cartItem.quantity);

        //SHIPPING ANS HANDLING
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
    });

    //TOTAL BEFORE TAX
    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;

    //15I
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    renderCheckoutHeader();

    const paymentSummaryHTML = `
        <div class="payment-summary-title">
        Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (${cartQuantity}):</div>
        <div class="payment-summary-money">
        $${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row js-payment-summary-shipping">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">
        $${formatCurrency(shippingPriceCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row js-payment-summary-total">
        <div>Order total:</div>
        <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary js-place-order">
        Place your order
        </button>
    `;
    document.querySelector('.js-payment-summary')
        .innerHTML = paymentSummaryHTML;

    document.querySelector('.js-place-order')
        .addEventListener('click', async () => {
            try {
                const response = await fetch('https://supersimplebackend.dev/orders', {  //! Wait to finish
                    method: 'POST',
                    headers: {
                        //! Header gives the cakend more information
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        cart: cart
                    })
                });
                const order = await response.json();
                console.log(order);
                addOrder(order);

            } catch (error) {
                console.log('Unexpected error, Please try again later.');
            }

            window.location.href = 'orders.html';
        });
};