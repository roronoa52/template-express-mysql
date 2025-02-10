import { Prisma, PrismaClient } from "@prisma/client";
import { logger } from "./logging";

const prismaClient = new PrismaClient({
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

prismaClient.$on("error", (e:any) => {
  logger.error(e);
});

prismaClient.$on("warn", (e:any) => {
  logger.error(e);
});

prismaClient.$on("info", (e:any) => {
  logger.error(e);
});

prismaClient.$on("query", (e:any) => {
  logger.error(e);
});

export { prismaClient };
