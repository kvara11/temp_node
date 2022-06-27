//without callback
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./testFolder/first.txt', 'utf8');
const second = readFileSync('./testFolder/second.txt', 'utf8');
console.log(first, second);

writeFileSync('./testFolder/third.txt', 'its new file');

// second read write with callback - Async
const {readFile, writeFile} = require('fs');

readFile('./testFolder/first.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;}
    const first = data;
    readFile('./testFolder/second.txt', 'utf8', (err, data) => {
        if(err){
            console.log(err);
            return;}
        const second = data;
        writeFile('./testFolder/4th result.txt', `${first} ${second}`, (err) => {
            if(err)
                console.log(err);
        });
    })
});