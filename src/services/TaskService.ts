import axios from "axios";
import { Task } from "../models/Task";

const getTasks = async (quantity: Number): Promise<Task[]> => {
    try {
        const res = await axios.get<{tasks: Task[]}>(
            `http://localhost:4000/task?quantity=${quantity}`
        );
        return res.data?.tasks;
    } catch (err) {
        console.log("something went wrong!");
        return Promise.reject();
    }
};

const updateTask = async (task: Task): Promise<void> => {
    try {
        await axios.put(
            `http://localhost:4000/task/${task._id}`,
            {
                ...task
            }
        );
        return Promise.resolve();
    } catch (err) {
        console.log("something went wrong!");
        return Promise.reject();
    }
};

export { getTasks, updateTask }