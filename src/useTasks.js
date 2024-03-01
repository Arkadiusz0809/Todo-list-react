import { useEffect, useState } from "react";

const getInitialTasks = () =>
    JSON.parse(localStorage.getItem("tasks")) || [];

const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTasks);
    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone);
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

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
    return { tasks, hideDone, toggleHideDone, removeTasks, toggleTaskDone, setAllDone, addNewTask };
}

export default useTasks;