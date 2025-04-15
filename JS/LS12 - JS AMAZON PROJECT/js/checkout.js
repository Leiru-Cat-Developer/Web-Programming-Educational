import { loadCart } from "../data/cart.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

// import '../data/car.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';1

// *Async functions make a function returns a promise
async function loadPage() {
    console.log('load page');

    try {
        // !Creates an error
        // throw 'error1';

        // !Await only can be used inside an async function
        await loadProductsFetch();

        const value = await new Promise((resolve, reject) => {
            // throw 'error2';
            loadCart(() => {
                reject('error3');
                resolve();
            });
        });

    } catch (error) {
        console.log('Unexpected error, Please try again later.');
    }

    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();

// *Allows us to execute multiple things at the same time
// new Promise((resolve) => {
//     loadProducts(() => {    // !The code executes after the loadProducts
//         resolve();
//     });
// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });

// *Using promisses let us flat our code
// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve();
//     });
// }).then(() => {
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });
// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// !Does the same thing with promise All
// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     })

// ]).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });