import express from "express";
import morgan from "morgan";
import cors from "cors";
import { AppDataSource } from "./data-source";

import authRoutes from "./routes/auth";

const app = express();
const origin = "http://localhost:3000";

app.use(cors({
  origin,
}));

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, response) => response.send("running"));

app.use("/api/auth", authRoutes);

let port = 4000;
app.listen(port, async () => {
  console.log(`server running at http://localhot:${port}`);

  // Postgres 연결
  AppDataSource.initialize().then(async () => {
    console.log("Database Initialized");
  }).catch(error => console.log(error))
});
