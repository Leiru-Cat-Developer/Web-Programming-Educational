const fs = require('fs');

//ASYNC CODE RUNDS A GROUP OF CODE BEFORE RUNS ANOTHER FUNCTION

fs.readFile('./async/first.txt', 'utf-8', (error, data) => {
    //FIRST
    (error) ? console.log(error) : console.log(data);
    fs.readFile('./async/second.txt', 'utf-8', (error, data) => {
        //SECOND
        (error) ? console.log(error) : console.log(data);
        fs.writeFile('./async/third.txt', 'File Created', (error, data) => {
            //THIRD
            (error) ? console.log(error) : console.log(data);
                //IT WILL KEEP GOING IF WE ADD SOMETHING ELSE, THIS IS UNACCEPTABLE
        });
    });
});