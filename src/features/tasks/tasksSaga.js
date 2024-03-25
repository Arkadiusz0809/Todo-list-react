import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocaleStorage";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice";
import { takeEvery, call, put, select, delay, takeLatest } from "redux-saga/effects";

function* fetchExampleTasksHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error){
        yield put(fetchExampleTasksError())
        yield call(alert, "coś poszło nie tak !");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeLatest("*", saveTasksInLocalStorageHandler)
}