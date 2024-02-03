import styles from "./Home.module.css";
import { Button } from "@mui/material";
import Input from "@/components/Input";
import ALLToDos from "@/components/ALLToDos";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>
          Your To Do&apos;s
        </h1>
        <hr className={styles.titleLine} />
        <Input label="Todo input" className={styles.input} />
        <Button variant="contained" className={styles.button}>Add</Button>
        <ALLToDos/>
      </div>
    </main>
  );
}
