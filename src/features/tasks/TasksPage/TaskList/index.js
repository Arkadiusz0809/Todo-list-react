import { toggleTaskDone, removeTasks, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { StyledLink, List, Item, Content } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import searchQueryParamName from "../searchQueryParamName";
import { Button } from "./styled";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../queryParameters";


const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
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
            <StyledLink to={toTask({ id: task.id })}
            >
              {task.content}
            </StyledLink>
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