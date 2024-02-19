import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { hello } from "./utils/hello";
import { useState } from "react";

hello();

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "mleko", done: false },
    { id: 2, content: "banan", done: true },
  ]);


  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }))
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  }

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return (
    <Container >
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form addNewTask={addNewTask}/>}
      />
      <Section
        title="Lista zadań"
        body={<Tasks
          tasks={tasks}
          hideDone={hideDone}
          removeTasks={removeTasks}
          toggleTaskDone={toggleTaskDone}
        />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
