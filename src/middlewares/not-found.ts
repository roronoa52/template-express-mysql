import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/response";

export const NotFoundMiddleware = (req: Request, res: Response) => {
    return res.status(StatusCodes.NOT_FOUND).json(
        errorResponse("Route does not exist", StatusCodes.NOT_FOUND)
    );
};