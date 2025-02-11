"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundMiddleware = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../utils/response");
const NotFoundMiddleware = (req, res) => {
    return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json((0, response_1.errorResponse)("Route does not exist", http_status_codes_1.StatusCodes.NOT_FOUND));
};
exports.NotFoundMiddleware = NotFoundMiddleware;
