const read = require('fs');

read.readFile('../testFolder/first.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('first.txt readed');
});
   
console.log('next task');