import { Link, useLocation } from "react-router-dom/cjs/react-router-dom";
import { toggleTaskDone, removeTasks, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import searchQueryParamName from "../searchQueryParamName";


const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "🗸" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button
            remove
            onClick={() => dispatch(removeTasks(task.id))}
          >
            🗑️
          </Button>
        </Item>
      ))}
    </List>
  )
};

export default TaskList;