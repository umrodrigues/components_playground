import Playground from "@/components/playground/playground";
import styles from './Page.module.scss'

export default function Home() {
  return (
    <>
    <div className={styles.page}>
    <Playground/>
    </div>
    </>

  );
}
