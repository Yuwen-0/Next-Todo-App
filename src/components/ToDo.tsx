
import Checkbox from '@mui/material/Checkbox';
import styles from "./Todo.module.css"
import { sql } from '@vercel/postgres';
export default function ToDoOutline({ToDo}: any) {
    return (
        <li className={styles.todoContainer}>  
            <h1 className='text-center'>{ToDo.task_name}</h1>
            <Checkbox className={`w-12 ${styles.checkbox}`} />
        </li>
    )
}

