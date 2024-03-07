import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice.js";
import { StyledButtons, ButtonsButton } from "./styled.js"
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const {tasks, hideDone}= useSelector(selectTasks);
    const dispatch = useDispatch();

    return(
        tasks.length > 0 && (
            <StyledButtons>
                <ButtonsButton onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </ButtonsButton>
                <ButtonsButton
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => dispatch(setAllDone())}
                >
                    Ukończ wszystkie
                </ButtonsButton>
            </StyledButtons>
        )
    );
}

export default Buttons;