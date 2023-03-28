var express = require('express');
var app = express();
//Tạo trang web

app.get('/', (req, res)=>{
    res.send("<h1>Xin chào</h1>")
});

app.post('/gioithieu.aspx', (req, res)=>{
    res.send("<h1>Đây là bát muối</h1>")
})

app.listen(8080, (err)=>{
    if(err){
        console.log(err);
    }
    console.log('Server đang chạy');
})