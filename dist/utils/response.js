"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (data, message = "Success", status_code = 200) => {
    return {
        status_code,
        message,
        data,
    };
};
exports.successResponse = successResponse;
const errorResponse = (message, status_code = 500) => {
    return {
        status_code,
        message,
        data: null,
    };
};
exports.errorResponse = errorResponse;
