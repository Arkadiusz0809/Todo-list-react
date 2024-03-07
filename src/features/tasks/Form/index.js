import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled.js"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const checkEmptyTask = (content) => {
        return content == null || content.trim() === '';
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!checkEmptyTask(newTaskContent)) {
            addNewTask(newTaskContent);
            setNewTaskContent("");
            focusInput();
        }
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                placeholder="Co jest do zrobienia ?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button className="form__button">Dodaj zadanie</Button>
        </StyledForm>
    )
}

export default Form;