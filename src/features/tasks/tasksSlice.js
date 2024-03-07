import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone : false,
    },
    reducers: {
        addTask: ({ tasks }, {payload: task}) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        setAllDone: state => {
             state.tasks.forEach((task) => {
                task.done = true;
            });
        },
        removeTasks: (state, action) => {
            const index = state.tasks.findIndex(task => task.id !== action.payload.id);
            state.tasks.splice(index, 1);
        }
    },
});

export const { 
    addTask, 
    toggleHideDone, 
    toggleTaskDone, 
    setAllDone, 
    removeTasks 
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;