import Checkbox from '@mui/material/Checkbox';
import styles from "./Todo.module.css"
export default function ToDo(){

    return (
        <li className={styles.todoContainer}>  
            <h1 className='text-center'>To Do</h1>
            <Checkbox className={`w-12 ${styles.checkbox}`} />
        </li>
    )
}