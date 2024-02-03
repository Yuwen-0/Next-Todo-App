import styles from "./Todo.module.css"
import ToDo from "./ToDo"

export default function AllToDos(){
    return (
        <ul className="list-outside">
            <ToDo/>
        </ul>
    )
}