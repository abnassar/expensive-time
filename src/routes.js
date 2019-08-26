import projects from "./components/projects/projects"
import home from "./components/home/home"
import tasks from "./components/allOfTasks/allOfTasks"

const routes = [
    {path:"/", component: home},
    {path:"/projects", component: projects},
    {path:"/tasks", component: tasks},
]
export default routes;
