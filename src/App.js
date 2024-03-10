import { HashRouter, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";

export default () => (
    <HashRouter>
        < Navigation />

            <Switch>
                <Route path={toTask()}>
                    <TaskPage />
                </Route>
                <Route path={toTasks()}>
                    <TasksPage />
                </Route>
                <Route path={toAuthor()}>
                    <AuthorPage />
                </Route>
                <Route>
                    <Redirect to={toTasks()} />
                </Route>
            </Switch>
    </HashRouter>
)