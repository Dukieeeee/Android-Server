exports.getList = (req, res, next) => {
    let hoTen = "Nguyen Van A";
    let objSP = {id: 4, name: "Máy tính"};

    res.render('sanpham/list', {user: hoTen, sp: objSP});
}

exports.addProduct = (req, res, next) => {
    if(req.method == 'POST'){

        res.send(req.body);
    }
    res.render('sanpham/add')
}