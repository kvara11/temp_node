const http = require('http');

const serv = http.createServer((req, res) => {
    console.log('request event');
    console.log('Hi');

});

serv.listen(5000, () => {
    console.log('server is running');
});