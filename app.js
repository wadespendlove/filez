import express from "express";
import router from "./api/folders.js";

const app = express();

app.get("/", (req, res) => {
  res.send(`Welcome to the Filez API`);
});

app.use("/api/v1", router);
app.use(express.json());

export default app;
