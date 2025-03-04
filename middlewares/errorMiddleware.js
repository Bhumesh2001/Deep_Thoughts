const { sendError } = require("../utils/responseHandler");

const errorMiddleware = (err, req, res, next) => {
    if (err.name === "ValidationError") {
        return sendError(res, 400, "Validation Error", err.message);
    }

    if (err.name === "CastError") {
        return sendError(res, 400, "Invalid ID Format", err.message);
    }

    if (err.code && err.code === 11000) {
        return sendError(res, 400, "Duplicate Key Error", "Duplicate value detected");
    }

    if (err.name === "JsonWebTokenError") {
        return sendError(res, 401, "Invalid Token", err.message);
    }

    if (err.name === "TokenExpiredError") {
        return sendError(res, 401, "Token Expired", err.message);
    }

    sendError(res, 500, "Internal Server Error", err.message);
};

module.exports = errorMiddleware;