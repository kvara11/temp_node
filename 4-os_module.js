//info current user
const os = require('os');
console.log(os.userInfo());

//info system uptime
console.log(`System is running ${os.uptime()} sec.`);

const currentOS = {
    name: os.type(),
    platform: os.platform(),
    release: os.release(),
    cpus: os.cpus(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);