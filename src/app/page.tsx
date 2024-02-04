"use client";
import styles from "./Home.module.css";
import { Button } from "@mui/material";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import Todos from "@/components/Todos";

export default function Home() {
  const [InputValue, setInputValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [ToDos, setToDos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const addTodo = async () => {
      if (!InputValue || !buttonClicked) return;
      const res = await fetch(`/api/add-todo?task_name=${InputValue}`);
      const data = await res.json();
      setToDos(data.todos.rows);
      setInputValue("");
    };
    addTodo();
    setButtonClicked(false);
  }, [InputValue, buttonClicked]);
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <Input
          label="Todo input"
          className={styles.input}
          value={InputValue}
          setInputValue={setInputValue}
          setRefresh={setRefresh}
          refresh={refresh}
        />
        <Button
          variant="contained"
          className={styles.button}
          onClick={() => setButtonClicked((prev) => !prev)}
        >
          Add
        </Button>
        <h1 className={styles.title}>
          Your To Do&apos;s
          <hr className={styles.titleLine} />
        </h1>
        <Todos
          refresh={refresh}
          ToDos={ToDos}
          setRefresh={setRefresh}
          setToDos={setToDos}
        />
      </div>
    </main>
  );
}
