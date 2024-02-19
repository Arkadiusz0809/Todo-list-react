import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setnewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setnewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__input"
                placeholder="Co jest do zrobienia ?"
                value={newTaskContent}
                onChange={({ target }) => setnewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
}

export default Form;