
const http = require('http');
const server = http.createServer((req, res) => { 
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }else if(req.url === '/about'){
        res.end('About page');
    }else{
        res.end(`
        <h1>404 Error</h1>
        <a href="/">Go Home</a>`)
    }
 });

 server.listen(5000);