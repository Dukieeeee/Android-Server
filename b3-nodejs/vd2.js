const http = require('http');
const sv = http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/': //Trang chủ
            homePage(req, res);
            break;
        case '/gioithieu.html':
            gioiThieu(req, res);
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("Trang web không tồn tại");
    }
});

const homePage = (req, res) => {
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end("<h1>Day la trang chu</h1>");
}

const gioiThieu = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>Day la trang gioi thieu</h1>");
}

sv.listen(8080);
console.log("Server đã chạy");