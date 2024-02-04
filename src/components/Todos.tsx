import { Suspense, useEffect } from "react";
import Todo from "@/components/ToDo";
import { useRouter } from "next/router";

export default function Todos({ ToDos, setRefresh, setToDos, refresh }: any) {
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(`${window.location.href}api/get-todo`);
        const data = await res.json();
        setToDos(data?.todos.rows);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [refresh, setToDos]); // empty dependency array ensures that it runs only once when the component mounts

  return (
    <>
      {Object.keys(ToDos).map((key: any) => (
        <Todo
          setToDos={setToDos}
          setRefresh={setRefresh}
          ToDo={ToDos[key]}
          key={key}
        />
      ))}
    </>
  );
}
