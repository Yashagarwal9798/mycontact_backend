const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validatetoken = asynchandler(async (req, res, next) => {
    let token;
    let authheader = req.headers.authorization || req.headers.Authorization;

    if (authheader && authheader.startsWith("Bearer")) {
        token = authheader.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SCERET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("Invalid user");
            }
            req.user = decoded.user;
            next();
        });
    } else {
        res.status(401);
        throw new Error("Invalid user or token is missing");
    }
});

module.exports = validatetoken;
