function sayHi(name){
    setInterval(() =>{
        console.log('Hi ' + name);
    }, 1000);
}

module.exports.sayHi = sayHi;