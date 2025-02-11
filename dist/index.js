"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
const not_found_1 = require("./middlewares/not-found");
const handler_error_1 = require("./middlewares/handler.error");
const bad_request_1 = __importDefault(require("./errors/bad-request"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    throw new bad_request_1.default("coba bad request error");
});
app.use((err, res) => {
    (0, not_found_1.NotFoundMiddleware)(err, res);
});
app.use((err, req, res, next) => {
    (0, handler_error_1.HandleErrorMiddleware)(err, req, res, next);
});
app.listen(config_1.PORT || 3000, () => {
    console.log(`Server Running in http://localhost:${config_1.PORT}`);
});
