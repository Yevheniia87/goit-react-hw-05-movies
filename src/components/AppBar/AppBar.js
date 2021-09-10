import Navigation from "../Navigation/Navigation";
import styles from "../../components/AppBar/appBar.module.css";
export default function AppBar() {
  return (
    <header className={styles.appBar}>
      <Navigation />
    </header>
  );
}
