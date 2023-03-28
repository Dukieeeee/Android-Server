exports.list = (req, res, next) => {
    res.render('user/list');
}

exports.add = (req, res, next) => {
    res.render('user/add');
}

exports.login = (req, res, next) => {
    res.render('user/login')
}