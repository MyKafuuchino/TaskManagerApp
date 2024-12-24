import express, { Express, Router } from "express";
import dotenv from "dotenv";
import taskRouter from "@route/task";
import { errorHandler } from "@middleware/errorHandler";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const apiRouter = Router();
apiRouter.use("/tasks", taskRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.get("*", (req, res) => {
  res.status(404).send({ success: false, message: "Route not found" });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
