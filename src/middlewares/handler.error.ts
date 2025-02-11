import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { errorResponse } from '../utils/response';

// Custom error interface untuk menangani properti tambahan
interface CustomError extends Error {
    statusCode?: number;
    code?: number;
    errors?: { [key: string]: { message: string } };
    keyValue?: Record<string, any>;
    value?: string;
}

export const HandleErrorMiddleware = (
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    let message = err.message || "Something went wrong, try again later";
    let errorType = err.name || "ServerError";

    // 🛠 Handle specific errors
    if (err.name === 'ValidationError' && err.errors) {
        message = Object.values(err.errors)
            .map((item) => item.message)
            .join(',');
        statusCode = StatusCodes.BAD_REQUEST;
    }

    if (err.code === 11000 && err.keyValue) {
        message = `Duplicate value entered for ${Object.keys(err.keyValue).join(", ")} field, please choose another value.`;
        statusCode = StatusCodes.BAD_REQUEST;
    }

    if (err.name === 'CastError' && err.value) {
        message = `No item found with id: ${err.value}`;
        statusCode = StatusCodes.NOT_FOUND;
    }

    return res.status(statusCode).json(errorResponse(message, statusCode));
};
