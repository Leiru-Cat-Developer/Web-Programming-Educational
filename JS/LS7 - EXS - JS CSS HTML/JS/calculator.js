let calculation = localStorage.getItem('calculation') || '';

showCalculation();

function updateCalculation(value) {
    calculation += value;
    localStorage.setItem('calculation', calculation);
    showCalculation();
}

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}

function showCalculation() {
    document.querySelector('.js-show-calculation')
        .innerHTML = `${calculation}`;
}