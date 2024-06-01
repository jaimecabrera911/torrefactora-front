import {useEffect, useState} from 'react'
import './App.css'
import {PriorityService} from "./services/priority.service.ts";
import {StatusService} from "./services/status.service.ts";
import TaskPage from "./pages/TaskPage.tsx";
import {TaskService} from "./services/task.service.ts";
import TaskForm from './pages/TaskForm.tsx';
import {Button, Modal} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UpdateTaskForm from "./pages/UpdateTaskForm.tsx";

function App() {

    const [open, setOpen] = useState(false);
    useEffect(() => {
        const priorityService = new PriorityService()
        priorityService.getAll().then(r => console.log(r))
        const statusService = new StatusService()
        statusService.getAll().then(r => console.log(r))
        const taskService = new TaskService()
        taskService.getAll().then(r => console.log(r))
    })

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/tasks/create" element={<TaskForm/>}/>
                    <Route path="/tasks/update/:id" element={<UpdateTaskForm/>}/>
                </Routes>
            </BrowserRouter>
            <Button onClick={handleOpen}>Crear Ticket</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <TaskForm/>
            </Modal>
            <TaskPage/>
        </>
    )
}

export default App
