import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, response) => response.send("running"));

let port = 4000;
app.listen(port, async () => {
  console.log(`server running at http://localhot:${port}`);
});
