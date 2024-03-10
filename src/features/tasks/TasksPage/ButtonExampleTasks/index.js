import { Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const ButtonExampleTasks = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    

    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    )
};

export default ButtonExampleTasks;