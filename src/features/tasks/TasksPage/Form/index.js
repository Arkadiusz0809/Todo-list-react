import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Button } from "./styled.js"
import { addTask } from "../../tasksSlice.js";
import { nanoid } from "@reduxjs/toolkit";
import { Input } from "../../Input/index.js";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const checkEmptyTask = (content) => {
        return content == null || content.trim() === '';
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!checkEmptyTask(newTaskContent)) {

            dispatch(addTask({
                content: newTaskContent,
                done: false,
                id: nanoid(),
            }));

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