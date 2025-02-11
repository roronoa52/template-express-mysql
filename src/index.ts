import express from "express";
import path from "path";
import { PORT } from "./config";
import { NotFoundMiddleware } from "./middlewares/not-found";
import { HandleErrorMiddleware } from "./middlewares/handler.error";
import { NotFound } from "./errors/not-found";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  res.send("Ini Prestige API")
});

app.use((err: any, res: express.Response) => {
  NotFoundMiddleware(err, res);
});
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  HandleErrorMiddleware(err, req, res, next);
});

app.listen(PORT || 3000, () => {
  console.log(`Server Running in http://localhost:${PORT}`);
});
