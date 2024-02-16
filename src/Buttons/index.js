import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="task__buttonHide">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className="task__buttonComplete"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;