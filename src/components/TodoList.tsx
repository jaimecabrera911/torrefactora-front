import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TodoList = () => {
    return (
        <div className='p-8'>
            <h1 className="mb-4 text-center text-6xl font-bold  ">TodoList</h1>
            <button className="btn btn-primary" onClick={() => {
                const modal = document.getElementById('my_modal_1');
                if (modal instanceof HTMLDialogElement) {
                    modal.showModal();
                }
            }}>Crear Tarea</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <TaskForm />
                </div>
            </dialog>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <TaskList title="Iniciadas" status='iniciada' />
                <TaskList title="En Proceso" status='en proceso' />
                <TaskList title="Finalizadas" status='finalizada' />
            </div>
        </div>
    );
}

export default TodoList;
