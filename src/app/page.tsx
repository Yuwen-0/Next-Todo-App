import styles from "./Home.module.css";
import { Button } from "@mui/material";
import Input from "@/components/Input";
import ALLToDos from "@/components/ALLToDos";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <Input label="Todo input" className={styles.input} />
        <Button variant="contained" className={styles.button}>Add</Button>
        <h1 className={styles.title}>
          Your To Do&apos;s
          <hr className={styles.titleLine} />
        </h1>
        <ALLToDos/>
      </div>
    </main>
  );
}
