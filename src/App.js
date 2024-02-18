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

  return (
    <Container >
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks 
          tasks={tasks} 
          hideDone={hideDone}
          removeTasks={removeTasks}
          />}
        extraHeaderContent={<Buttons tasks={tasks} 
        hideDone={hideDone} 
        toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
