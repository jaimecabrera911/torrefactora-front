import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TodoList = () => {
    return (
        <div className='prose p-10'>
            <h1>TodoList</h1>
            <button className="btn" onClick={() => {
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
            <div className="flex justify-between w-svw p-10">
                <TaskList title="Iniciadas" status='iniciada' />
                <TaskList title="En Proceso" status='en proceso' />
                <TaskList title="Finalizadas" status='finalizada' />
            </div>
        </div>
    );
}

export default TodoList;
