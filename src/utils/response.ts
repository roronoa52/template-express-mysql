interface ApiResponse<T = any> {
    status_code: number;
    message: string;
    data?: T | null;
}

export const successResponse = <T>(data: T, message = "Success", status_code = 200): ApiResponse<T> => {
    return {
        status_code,
        message,
        data,
    };
};

export const errorResponse = (message: string, status_code = 500): ApiResponse<null> => {
    return {
        status_code,
        message,
        data: null,
    };
};
