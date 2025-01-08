import {TaskService} from "@service/TaskService";
import {Request, Response} from "express";

export class TaskController {
    private taskService: TaskService;

    constructor(taskService: TaskService) {
        this.taskService = taskService;
    }

    getAllTask = (req: Request, res: Response) => {
        const tasks = this.taskService.getAllTasks();
        res.json({
            success: true,
            message: "Success get all tasks",
            data: tasks,
        });
    };

    getDoneTask = (req: Request, res: Response) => {
        const tasks = this.taskService.getDoneTasks();
        res.json({
            success: true,
            message: "Success get done tasks",
            data: tasks,
        })
    }

    getNotDoneTasks = (req: Request, res: Response) => {
        const tasks = this.taskService.getNotDoneTasks();
        res.json({
            success: true,
            message: "Success get haven't done tasks",
            data: tasks,
        })
    }

    createNewTask = (req: Request, res: Response) => {
        const {title} = req.body;
        const newTask = this.taskService.createNewTask(title);
        res.json({
            success: true,
            message: "Success create new task",
            data: newTask,
        });
    };

    updateTask = (req: Request, res: Response) => {
        const {id} = req.params;
        const {title, done} = req.body;
        const updatedTask = this.taskService.updateTask(id, title, done);
        res.json({
            success: true,
            message: "Success update task",
            data: updatedTask,
        });
    };

    deleteTask = (req: Request, res: Response) => {
        const {id} = req.params;
        const deletedTask = this.taskService.deleteTask(id);
        res.json({
            success: true,
            message: "Success delete task",
            data: deletedTask,
        });
    };
}
