"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleErrorMiddleware = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../utils/response");
const HandleErrorMiddleware = (err, req, res, next) => {
    let statusCode = err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    let message = err.message || "Something went wrong, try again later";
    let errorType = err.name || "ServerError";
    // 🛠 Handle specific errors
    if (err.name === 'ValidationError' && err.errors) {
        message = Object.values(err.errors)
            .map((item) => item.message)
            .join(',');
        statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
    if (err.code === 11000 && err.keyValue) {
        message = `Duplicate value entered for ${Object.keys(err.keyValue).join(", ")} field, please choose another value.`;
        statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
    if (err.name === 'CastError' && err.value) {
        message = `No item found with id: ${err.value}`;
        statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
    }
    return res.status(statusCode).json((0, response_1.errorResponse)(message, statusCode));
};
exports.HandleErrorMiddleware = HandleErrorMiddleware;
