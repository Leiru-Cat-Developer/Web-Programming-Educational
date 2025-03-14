const { readFile } = require('fs/promises');

//WE ALREADY HAVE FUNCTIONS FOR THIS
// const { promisify } = require('util');
// const readFilePromise = promisify(readFile);

// //SIMPLE FORM
// readFile('./data/first.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
// });

//PROMISE (ASYNG CODE)
// const getText = ((pathFile) => {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, 'utf-8', (error, data) => {
//             if (error) {
//                 reject(error);
//             }
//             resolve(data);
//         });
//     });
// });

// getText('./data/first.txt')
//     .then((result) => console.log(result))
//     .then(() => getText('./data/first.txt'))
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

//ASYNC AWAIT
async function read() {
    try {
        //GENERATE ERRORS WITH THROW
        // throw new Error ('Error inesperado');
        const result1 = await readFile('./data/first.txt', 'utf-8');
        const result2 = await readFile('./data/second.txt', 'utf-8');
        console.log(result1);
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
}

read();