// src/components/TaskForm.tsx

import React, { useState } from 'react';
import { Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { TaskModel } from "../models/task.model.ts";
import { TaskService } from "../services/task.service.ts";
import { useParams } from "react-router-dom";

const initialTaskState: TaskModel = {
    name: '',
    description: '',
    status: '',
    priority: '',
    beginDate: new Date(),
    endDate: new Date(),
};

const UpdateTaskForm: React.FC = () => {
    const [task, setTask] = useState<TaskModel>(initialTaskState);
    const { id } = useParams<{ id: string }>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTask({
            ...task,
            [name]: value,
        });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTask({
            ...task,
            [name]: new Date(value),
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(task)
        if (id) {
            const taskService = new TaskService();
            taskService.update(id, task).then(r => console.log(r));
        }
    };

    return (
        <Container maxWidth="sm" style={{ background: "white", padding: "2rem" }}>
            <Typography variant="h4" gutterBottom>
                Create Task
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            name="name"
                            value={task.name}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            name="description"
                            value={task.description}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Estado"
                            name="status"
                            value={task.status}
                            onChange={handleChange}
                            select
                            fullWidth
                        >
                            <MenuItem value="iniciada">Iniciada</MenuItem>
                            <MenuItem value="en progreso">En Proceso</MenuItem>
                            <MenuItem value="finalizada">Finalizada</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Prioridad"
                            name="priority"
                            value={task.priority}
                            onChange={handleChange}
                            select
                            fullWidth
                        >
                            <MenuItem value="bajo">Bajo</MenuItem>
                            <MenuItem value="normal">Normal</MenuItem>
                            <MenuItem value="urgente">Urgente</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Begin Date"
                            name="beginDate"
                            type="date"
                            value={task.beginDate?.toISOString().split('T')[0]}
                            onChange={handleDateChange}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="End Date"
                            name="endDate"
                            type="date"
                            value={task.endDate?.toISOString().split('T')[0]}
                            onChange={handleDateChange}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default UpdateTaskForm;
