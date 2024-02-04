"use client";
import styles from "./Home.module.css";
import { Button } from "@mui/material";
import Input from "@/components/Input";
import Todos from "@/components/ToDo";
import { useEffect, useState } from "react";


export default function Home() {
  const [InputValue, setInputValue] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [ToDos, setToDos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('http://localhost:3000/api/get-todo');
      const data = await res.json();
      console.log(data);
      setToDos(data?.todos.rows);
    }
    fetchTodos();
  }, [])

  useEffect(() => {
    const addTodo = async () => {
      if(!InputValue || !buttonClicked) return;
      const res = await fetch(`http://localhost:3000/api/add-todo?task_name=${InputValue}`);
      const data = await res.json();
      console.log(data);
      setToDos(data.todos.rows);
      setInputValue('');
    }
    setButtonClicked(false);
    addTodo();
  }, [InputValue, buttonClicked])
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <Input label="Todo input" className={styles.input} value={InputValue} setInputValue={setInputValue} />
        <Button variant="contained" className={styles.button} onClick={() => setButtonClicked(prev => !prev)}>Add</Button>
        <h1 className={styles.title}>
          Your To Do&apos;s
          <hr className={styles.titleLine} />
        </h1>
        {Object.keys(ToDos).map((key: any) => {
          return <Todos ToDo={ToDos[key]} key={key} />
        })}
      </div>
    </main>
  );
}

