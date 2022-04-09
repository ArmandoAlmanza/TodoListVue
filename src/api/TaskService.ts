import { Task } from "@/interface/Task";
import axios from "./axios";
import { AxiosResponse } from "axios";

export const createTask = async (task: Task) =>
    await axios.post("/tasks", task);

export const getTask = async (): Promise<AxiosResponse<Task[]>> =>
    await axios.get("/Tasks");

/* export const createTask = async (task: Task) => {
    await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .catch((error) => console.log("Error", error))
        .then((res) => console.log("Success", res));
}; */

/* export const getTask = async (): Promise<Task[]> => {
    await fetch("http://localhost:3000/api/tasks")
        .then((res) => res.json())
        .catch((error) => console.log("Error", error))
        .then((res) => console.log("Success", res));
};
 */
