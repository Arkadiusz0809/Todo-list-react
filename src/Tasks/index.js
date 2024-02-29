import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTasks, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button
          toggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "🗸" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button
          remove
          onClick={() => removeTasks(task.id)}
        >
          🗑️
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;