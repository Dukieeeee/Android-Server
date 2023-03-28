const http = require('http');
const fs = require('fs'); //Thư viện đọc ghi file
const sv = http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/hoa.jpg': //Trả về file hoa.jpg
            fs.readFile('./hoa.jpg', (err, data)=>{
                if(err){
                    throw err;
                }
                res.end(data);
            });
            break;
        case '/': //Trang chủ
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Trang chu</h1><img src="/hoa.jpg"/>');
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("Dia chi khong ton tai");
            break;
    }
});

sv.listen(8080);
console.log("Server đã chạy");