import { StyledButtons, ButtonsButton } from "./styled.js"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <StyledButtons >
            <ButtonsButton onClick={toggleHideDone} >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </ButtonsButton>
            <ButtonsButton
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </ButtonsButton>
        </StyledButtons>
    )
);

export default Buttons;