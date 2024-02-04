import { useEffect } from "react";
import Todo from "@/components/ToDo";
export default function Todos({ ToDos, setRefresh, setToDos, refresh }: any) {
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("/api/get-todo");
        const data = await res.json();
        setToDos(data?.todos.rows);
        console.log("ToDos", data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [refresh, setToDos]); // empty dependency array ensures that it runs only once when the component mounts

  return (
    <>
      {Object.keys(ToDos).map((key: any) => (
        <Todo setRefresh={setRefresh} ToDo={ToDos[key]} key={key} />
      ))}
    </>
  );
}
