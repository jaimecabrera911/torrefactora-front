import  {useEffect, useMemo, useState} from 'react';
import {MaterialReactTable, type MRT_ColumnDef, useMaterialReactTable,} from 'material-react-table';
import {TaskModel} from "../models/task.model.ts";
import {TaskService} from "../services/task.service.ts";
import {Chip} from "@mui/material";
import {Link} from "react-router-dom";

const Example = () => {

    const [tasks, setTasks] = useState<TaskModel[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const taskService = new TaskService()
            const data = await taskService.getAll()
            setTasks(data)
            console.log(data)
        }
        fetchData()
    }, [])
    //should be memoized or stable
    const columns = useMemo<MRT_ColumnDef<TaskModel>[]>(
        () => [
            {
                accessorKey: 'name', //access nested data with dot notation
                header: 'Nombre',
                size: 150,
            },
            {
                accessorKey: 'description',
                header: 'Descripcion',
                size: 150,
            },
            {
                accessorKey: 'status',
                header: 'Estado',
                size: 150,
                Cell: ({renderedCellValue}) => {
                    switch (renderedCellValue) {
                        case "iniciada":
                            return <Chip label={renderedCellValue} color="default"/>
                        case "en proceso":
                            return <Chip label={renderedCellValue} color="primary"/>
                        case "terminada":
                            return <Chip label={renderedCellValue} color="success"/>
                    }
                },
            },
            {
                accessorKey: 'priority',
                header: 'Prioridad',
                size: 150,
                Cell: ({renderedCellValue}) => {
                    switch (renderedCellValue) {
                        case "bajo":
                            return <Chip label={renderedCellValue} color="secondary"/>
                        case "normal":
                            return <Chip label={renderedCellValue} color="primary"/>
                        case "urgente":
                            return <Chip label={renderedCellValue} color="error"/>
                    }
                },

            },
            {
                accessorKey: 'beginDate', //normal accessorKey
                header: 'Fecha Inicial',
                size: 200,
            },
            {
                accessorKey: 'endDate',
                header: 'Fecha Final',
                size: 150,
            },
            {
                accessorKey: 'id',
                header: 'Acciones',
                size: 150,
                Cell: ({renderedCellValue}) => {
                    return <Link to={`/tasks/update/${renderedCellValue}`}/>
                },
            },
        ],
        [],
    );

    const data = tasks;
    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });

    return <MaterialReactTable table={table}/>;
};

export default Example;
