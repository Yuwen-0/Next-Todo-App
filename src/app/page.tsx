"use client";
import styles from "./Home.module.css";
import { Button } from "@mui/material";
import Input from "@/components/Input";
import { useEffect, useState, Suspense } from "react";
import Todos from "@/components/Todos";

export default function Home() {
  const [InputValue, setInputValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [ToDos, setToDos] = useState<
    { task_name: string; id: string; is_completed: boolean }[]
  >([]);

  useEffect(() => {
    console.log("ToDos", ToDos);
  }, [ToDos]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const addTodo = async () => {
      if (!InputValue || !buttonClicked) return;
      const id = window.crypto
        .getRandomValues(new Uint32Array(1))[0]
        .toString();
      setToDos((prev) => [
        ...prev,
        {
          id: id,
          task_name: InputValue,
          is_completed: false,
        },
      ]);
      setInputValue("");
      await fetch(`/api/add-todo?task_name=${InputValue}&id=${id}`);
    };

    addTodo();
    setButtonClicked(false);
  }, [InputValue, ToDos.length, buttonClicked]);
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
        <Suspense fallback={<div>Loading...</div>}>
          <Todos
            refresh={refresh}
            ToDos={ToDos}
            setRefresh={setRefresh}
            setToDos={setToDos}
          />
        </Suspense>
      </div>
    </main>
  );
}
