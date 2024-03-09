import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocaleStorage";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { takeEvery, call, put, select } from "redux-saga/effects";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error){
        yield call(alert, "coś poszło nie tak !");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    console.log("saga działa")
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}