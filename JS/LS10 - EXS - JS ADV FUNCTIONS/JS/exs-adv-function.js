//12A - 12B
const add = function() {
    console.log(2 + 3);
}
add();

function runTwice(fun) {
    fun();
    fun();
}

runTwice(function() {
    console.log('12B');
});

runTwice(function() {
    add();
});

//12C - 12D
let buttonClicked = false;
function changeText() {
    if(buttonClicked === false) {
        //START, SO WE CHANGE TO FINISHED
        setTimeout(function() {
            document.querySelector('.js-start-button')
            .innerHTML = 'Finished!';
        },1000);
        buttonClicked = true;
    } else {
        //FINISHED, SE WE CHANGE TO START
        setTimeout(function() {
            document.querySelector('.js-start-button')
            .innerHTML = 'Start';
        },1000);
        buttonClicked = false;
    }
    document.querySelector('.js-start-button')
    .innerHTML = 'Loading . . .';
}

//12E - 12F
let timeOutID;
function addMessage() {
    const message = document.querySelector('.js-add-message');
    message.innerHTML = 'Added';
    clearTimeout(timeOutID);
    setTimeout(function() {
        message.innerHTML = '';
    },2000);
}

//12G - 12I
let numMessages = 2;
messagingTitle();

function messagingTitle() {
    const currentTitle = document.title;    //WE ARE SAVING THE CURRENT TITLE TO DISPLAY IT AGAIN
    
    setInterval(function() {
        if(numMessages <= 0) {
            document.title = currentTitle;
        }else {
            if(document.title === currentTitle) {
                document.title = `(${numMessages}) New Messages`;
            }else {
                document.title = currentTitle;
            }
        }
    },1000);
}