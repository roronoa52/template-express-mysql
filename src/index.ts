import express from "express";
import path from "path";
import { PORT } from "./config";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  res.send("Welcome to the Express server! Access images at /images");
});

app.listen(PORT || 3000, () => {
  console.log(`Server Running in http://localhost:${PORT}`);
});
