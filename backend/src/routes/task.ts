import { TaskController } from "@controller/TaskController";
import { TaskService } from "@service/TaskService";
import { Router } from "express";

const taskRouter = Router();

const taskService = new TaskService();
const taskController = new TaskController(taskService);

taskRouter.get("/", taskController.getAllTask);
taskRouter.post("/", taskController.createNewTask);
taskRouter.put("/:id", taskController.updateTask);
taskRouter.delete("/:id", taskController.deleteTask);

export default taskRouter;
