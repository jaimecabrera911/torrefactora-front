import React from "react";
import {FaCalendarAlt, FaClock, FaExclamationCircle, FaEdit} from 'react-icons/fa';
import {TaskModel} from "../models/task.model";
import {UpdateTaskForm} from "./UpdateTaskForm";

interface Props {
    task: TaskModel;
}

const TaskCard: React.FC<Props> = ({task}) => {
    const colorBadge: Record<string, string> = {
        baja: "badge-info",
        normal: "badge-warning",
        urgente: "badge-error"
    }

    return (
        <div className="collapse bg-base-200 mb-3 rounded-lg shadow-md">
            <input type="checkbox" aria-label="Toggle task details"/>
            <div className="collapse-title text-xl font-medium flex justify-between items-center">
                <span>{task.name}</span>
                <div
                    className={`badge ${task.priority && task.priority in colorBadge ? colorBadge[task.priority] : 'badge-default'} gap-2`}>
                    {task.priority && <FaExclamationCircle/>}
                    <span className="badge-text capitalize">{task.priority}</span>
                </div>
            </div>
            <div className="collapse-content">
                <div className="flex items-center mb-2">
                    <FaCalendarAlt className="mr-2"/>
                    <p>{task.beginDate?.toLocaleString()}</p>
                    <FaClock className="ml-4 mr-2"/>
                    <p>{task.endDate?.toLocaleString()}</p>
                </div>
                <p>{task.description}</p>
                <button className="btn  btn-outline btn-primary mt-5" onClick={() => {
                    const modal = document.getElementById('my_modal_2');
                    if (modal instanceof HTMLDialogElement) {
                        modal.showModal();
                    }
                }}><FaEdit/>
                </button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <UpdateTaskForm task={task}/>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default TaskCard;
