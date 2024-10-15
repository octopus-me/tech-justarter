import express from "express";
import { responseBoxLock } from "./src/mocks/box-lock.mjs";

const app = express();
const port = 9777;

app.set('json spaces', 2);

app.get("/box-lock", (req, res) => {
  res.json(responseBoxLock);
});

app.listen(port, () => {
  console.log(`Mock API running at http://localhost:${port}`);
});
