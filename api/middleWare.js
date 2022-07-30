function verifyToken(req, res, next) {
    //get Auth header
    const bearerHeader = req.headers["authorization"];
    // console.log("bearerheader", bearerHeader);

    if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    //  console.log("bearer", bearer);

    const bearerToken = bearer[1];
    // console.log("bearertoken", bearerToken);

    req.token = bearerToken;
    next();

    } else {
    res.sendStatus(403);
    }
}

module.exports = { verifyToken };