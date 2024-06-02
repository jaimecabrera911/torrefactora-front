import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard.tsx";
import { TaskModel } from "../models/task.model.ts";
import { findByStatus } from "../services/task.service.ts";

interface Props {
    title: string;
    status: string;
}

const TaskList: React.FC<Props> = ({ title, status }) => {
    const [tasks, setTasks] = useState<TaskModel[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await findByStatus(status);
                setTasks(data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, [status]);

    return (
        <div className="flex flex-col border-solid border-2 border-sky-500 rounded-lg" style={{ height: "36rem" }}>
            <div className="prose">
                <h1 className="text-center my-4">{title}</h1>
            </div>
            <div className="flex-1 overflow-y-scroll px-4">
                {tasks.map(task => (
                    task.id && task.name && task.description && task.priority ? (
                        <TaskCard key={task.id} task={task} />
                    ) : null
                ))}
            </div>
        </div>
    );
};

export default TaskList;
