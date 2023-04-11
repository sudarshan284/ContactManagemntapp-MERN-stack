const {constants} = require("../contacts");
const Errorhandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500 ;
    res.json({title :"not found",message : err.message , stackTrace : err.stack});
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title :"validation error",message : err.message , stackTrace : err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({title :"Not found",message : err.message , stackTrace : err.stack});
            break;
        case constants.UNAUTHORIZED:
            res.json({title :"Unauthorized access",message : err.message , stackTrace : err.stack});
            break;
        case constants.FORBIDDEN:
            res.json({title :"forbidden",message : err.message , stackTrace : err.stack});
            break;
        case constants.SERVER_ERROR:
            res.json({title :"Internal server error",message : err.message , stackTrace : err.stack});
            break;
        default:
            console.log("No error , all good");
            break;
    }
};
module.exports = Errorhandler;