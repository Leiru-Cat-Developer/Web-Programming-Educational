//18A
function greeting() {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        console.log(xhr.response);
    });

    xhr.open('GET', 'https://supersimplebackend.dev/greeting');
    xhr.send();
}

//18B
function greetingFetch() {
    const promise = fetch(
        'http://supersimplebackend.dev/greeting'
    ).then((response) => {
        return response.text();
    }).then((text) => {
        console.log(text);
    });
}

//18C
async function greetingFetchAsync() {
    const response = await fetch(
        'https://supersimplebackend.dev/greeting'
    );
    const text = await response.text();
    console.log(text);
}

//18D
async function greetingFetchAsyncName(name) {
    const response = await fetch(
        'https://supersimplebackend.dev/greeting',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // ! The name of this variable is the same as the parameter thats why we don't put ': name'
                name
            })
        }
    );

    const text = await response.text();
    console.log(text);
}

//18E
async function amazonTry() {
    //CORS ERROR
    try {
        const response = await fetch('https://amazon.com');
        const text = await response.text();
        console.log(text);

    } catch (error) {
        console.log('CORS Error. You request was blocked by the backend.');
    }
}

//18G
async function greetingFetchAsyncChecker() {

    try {
        const response = await fetch(
            'https://supersimplebackend.dev/greeting',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
                // ,body: JSON.stringify({
                //     name: 'Uriel'
                // })
            }
        )

        if (response.status >= 400) {
            throw response;     // *Creating an error
        }

        const text = await response.text();
        console.log(text);

    } catch (error) {
        if (error.status === 400) {
            const message = await error.json();
            console.log(message);
        } else {
            console.log('Network Error, please try again later');
        }
    }
}

greeting();                             //18A
greetingFetch();                        //18B
greetingFetchAsync();                   //18C
greetingFetchAsyncName('Leiru Kitty');  //18D
amazonTry();                            //18E
greetingFetchAsyncChecker();            //18G