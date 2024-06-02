import { SubmitHandler, useForm } from "react-hook-form";
import { createTask } from "../services/task.service";


type Inputs = {
    name: string;
    description: string;
    status: string;
    priority: string;
    beginDate: string;
    endDate: string;
};

export default function TaskForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => createTask({
        ...data, beginDate: new Date(data.beginDate),
        endDate: new Date(data.endDate),
    }).then(() => alert("Tarea guardada correctamente"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="prose mb-3 text-center">
                <h1>Crear Tarea</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <input type="text" {...register("name", { required: true })}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Descripción
                    </label>
                    <input type="text" {...register("description", { required: true })}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
                </div>
                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                        Estado
                    </label>
                    <select {...register("status", { required: true })}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        <option value="">Seleccionar Estado</option>
                        <option value="iniciada">Iniciada</option>
                        <option value="en proceso">En Proceso</option>
                        <option value="finalizada">Finalizada</option>
                    </select>
                    {errors.status && <span className="text-red-500 text-sm">Status is required</span>}
                </div>
                <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                        Prioridad
                    </label>
                    <select {...register("priority", { required: true })}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        <option value="">Seleccionar Prioridad</option>
                        <option value="baja">Baja</option>
                        <option value="normal">Normal</option>
                        <option value="urgente">Urgente</option>
                    </select>
                    {errors.priority && <span className="text-red-500 text-sm">Priority is required</span>}
                </div>
                <div>
                    <label htmlFor="beginDate" className="block text-sm font-medium text-gray-700">
                        Fecha Inicial
                    </label>
                    <input type="date" {...register("beginDate", { required: true })}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    {errors.beginDate && <span className="text-red-500 text-sm">Begin Date is required</span>}
                </div>
                <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                        Fecha Final
                    </label>
                    <input type="date" {...register("endDate", { required: true })}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    {errors.endDate && <span className="text-red-500 text-sm">End Date is required</span>}
                </div>
            </div>
            <div className="mt-4">
                <button type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Guardar
                </button>
            </div>
        </form>
    );
}
