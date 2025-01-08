import {ResponseError} from "@utils/ResponseError";
import uuidv4 from "@utils/uuidv4";

interface Task {
    id: string;
    title: string;
    done: boolean;
}

export class TaskService {
    private tasks: Task[] = [];

    constructor() {
        this.initializeTasks();
    }

    private initializeTasks(): void {
        this.tasks = [
            {id: uuidv4(), title: "Task 1", done: true},
            {id: uuidv4(), title: "Task 2", done: false},
        ];
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getDoneTasks(): Task[] {
        return this.tasks.filter((task: Task) => task.done);
    }

    getNotDoneTasks(): Task[] {
        return this.tasks.filter((task: Task) => !task.done);
    }

    createNewTask(title: string): Task {
        if (!title) {
            throw new ResponseError(400, "Title is required");
        }
        const newTask: Task = {id: uuidv4(), title, done: false};
        this.tasks.push(newTask);
        return newTask;
    }

    updateTask(id: string, title: string, done: boolean): Task {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);

        if (taskIndex === -1) {
            throw new ResponseError(404, "Task not found");
        }
        this.tasks[taskIndex] = {id, title, done};
        return this.tasks[taskIndex];
    }

    deleteTask(id: string): Task {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex === -1) {
            throw new ResponseError(404, "Task not found");
        }
        const deletedTask = this.tasks.splice(taskIndex, 1)[0];
        return deletedTask;
    }
}
