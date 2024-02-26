import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const checkEmptyTask = (content) => {
        return content == null || content.trim() === '';
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!checkEmptyTask(newTaskContent)) {
            addNewTask(newTaskContent);
            setNewTaskContent("");
        }
    };


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__input"
                placeholder="Co jest do zrobienia ?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
}

export default Form;