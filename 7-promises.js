const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }

const start = async () => {
    try {
        // const text = await getText('./testFolder/first.txt');
        // const text2 = await getText('./testFolder/second.txt');
        const text1_1 = await readFilePromise('./testFolder/first.txt', 'utf8');
        const text1_2 = await readFilePromise('./testFolder/second.txt', 'utf8');
        await writeFilePromise('./testFolder/new.txt', 'This is new with promisify');
        // console.log(text, text2);
        console.log(text1_1, text1_2);
    } catch (error) {
        console.log(error);
    }
}

start();

// getText('./testFolder/first.txt').then((result)=>console.log(result)).catch((err)=>console.log(err));