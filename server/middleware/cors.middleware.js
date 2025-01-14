function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, PUT, PATH, POST, DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
}

module.exports = cors