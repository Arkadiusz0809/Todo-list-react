import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button onClick={toggleHideDone} className="buttons_button">
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