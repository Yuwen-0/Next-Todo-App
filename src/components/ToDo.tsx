"use client";
import Checkbox from "@mui/material/Checkbox";
import styles from "./Todo.module.css";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import AreYouSure from "./Are You Sure";

export default function ToDoOutline({ ToDo, setRefresh }: any) {
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  useEffect(() => {
    if (selectedValue === "Yes") {
      fetch(`/api/delete-todo`, {
        method: "POST",
        body: JSON.stringify({ id: ToDo.id }),
      });
    }
    setRefresh((prev: boolean) => !prev);
  }, [ToDo.id, selectedValue, setRefresh]);
  useEffect(() => {
    const updateTodo = async () => {
      const data = {
        id: ToDo.id,
        is_done: isChecked,
      };
      await fetch(`/api/update-todo`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    };
    updateTodo();
  }, [ToDo.id, isChecked]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <li className={styles.todoContainer}>
      <h1 className={`${isChecked ? styles.done : ""} ${styles.Todo}`}>
        {ToDo.task_name}
      </h1>
      <Checkbox
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        color="success"
        className={`w-12 ${styles.checkbox}`}
      />
      <Button
        variant="outlined"
        color="error"
        className={styles.delete}
        onClick={handleClickOpen}
      >
        <DeleteIcon />
      </Button>
      <AreYouSure
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </li>
  );
}
