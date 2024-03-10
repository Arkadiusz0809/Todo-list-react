import { StyledButtons, ButtonsButton } from "./styled.js"
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone,
    setAllDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectHideDone,
    
} from "../../tasksSlice.js";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!areTasksEmpty && (
                <>
                    <ButtonsButton onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </ButtonsButton>
                    <ButtonsButton
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </ButtonsButton>
                </>
            )}
        </StyledButtons>
    )
}

export default Buttons;