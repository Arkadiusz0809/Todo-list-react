import "./style.css"

const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons_button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className="buttons_button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;