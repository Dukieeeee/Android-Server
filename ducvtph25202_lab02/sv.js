const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/':
            fs.readFile('./home.html', (err, data) => {
                if (err) {
                    throw err;
                }
                res.end(data)
            });
            break;
        case '/contact.html':
            fs.readFile('./contact.html', (err, data) => {
                if (err) {
                    throw err;
                }
                res.end(data)
            });
            break;
        case '/info.html':
            fs.readFile('./info.html', (err, data) => {
                if (err) {
                    throw err;
                }
                res.end(data)
            });
            break;
        default:
            fs.readFile(req.url.substring(1), (err, data) => {

                if (err) {
                    res.writeHead(404, { 'Content-type': 'text/html' });
                    return res.end();
                };

                if (req.url.indexOf('.css') > 0)
                    res.writeHead(200, "OK", { 'Content-type': 'text/css' });
                else
                    res.writeHead(200, "OK", { 'Content-type': 'text/html' });

                res.write(data.toString('utf8'))
                return res.end();
            })
            break;
    }
});
server.listen(8080);
console.log("Run");