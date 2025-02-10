"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const client_1 = require("@prisma/client");
const logging_1 = require("./logging");
const prismaClient = new client_1.PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        },
        {
            emit: "event",
            level: "error",
        },
        {
            emit: "event",
            level: "info",
        },
        {
            emit: "event",
            level: "warn",
        },
    ],
    errorFormat: 'pretty',
});
exports.prismaClient = prismaClient;
prismaClient.$on("error", (e) => {
    logging_1.logger.error(e);
});
prismaClient.$on("warn", (e) => {
    logging_1.logger.error(e);
});
prismaClient.$on("info", (e) => {
    logging_1.logger.error(e);
});
prismaClient.$on("query", (e) => {
    logging_1.logger.error(e);
});
