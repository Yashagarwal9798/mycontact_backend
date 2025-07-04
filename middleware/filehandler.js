const {constants} = require('../constants');
const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "VALIDATION error",
                message: err.message,
                stackTrace: err.stack,  
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                message: err.message,
                stackTrace: err.stack,  
            });
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.json({
                title: "INTERNAL_SERVER_ERROR",
                message: err.message,
                stackTrace: err.stack,  
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "UNAUTHORIZED",
                message: err.message,
                stackTrace: err.stack,  
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "NOT_FOUND",
                message: err.message,
                stackTrace: err.stack,  
            });
            break;
        default:
            console.log("ALL is well");
            break;
    }
};
module.exports = errorHandler;