console.log(document.querySelector('.js-button'));

function button_active(selector) {
    const buttonElement1 = document.querySelector(selector);

    if (!buttonElement1.classList.contains('is-toggled')) {
        turnOffPreviousButton();
        buttonElement1.classList.add('is-toggled');
    } else {
        buttonElement1.classList.remove('is-toggled');
    }
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
  }