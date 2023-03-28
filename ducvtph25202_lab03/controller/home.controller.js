exports.index = (req, res, next) => {
    res.render('index');
}

exports.table = (req, res, next) => {
    res.render('table')
}

exports.form = (req, res, next) => {
    res.render('form')
}

