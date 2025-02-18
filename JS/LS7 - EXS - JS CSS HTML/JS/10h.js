function handleCostKeyDown(event) {
    if (event.key === 'Enter') { calculateTotal(); }
}
function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    //DIFFERENT PROPERTIE FOR INPUT ELEMENTS
    let cost = Number(inputElement.value); //CONVERTED STRING TO NUMBER
    
    //COSTS LESS THAN 0
    if (cost < 0) {
        document.querySelector('.js-error-message')
        .innerHTML = `Error: cost cannot be less than $0`;

        document.querySelector('.js-total-cost')
        .innerHTML = '';
    }else {
        document.querySelector('.js-error-message')
        .innerHTML = '';
    }

    if (cost > 0 && cost < 40) {
        //COSTS BETWEEN 0 AND 40
        cost += 10;
        document.querySelector('.js-total-cost')
        .innerHTML = `Total Cost: $${cost}`;
    }else if (cost === 0){
        //COSTS EQUALS THAN 0
        document.querySelector('.js-total-cost')
        .innerHTML = '';        
    }else if (cost > 40){
        //COSTS OVER 40
        document.querySelector('.js-total-cost')
        .innerHTML = `Total Cost: $${cost}`;
    }
}