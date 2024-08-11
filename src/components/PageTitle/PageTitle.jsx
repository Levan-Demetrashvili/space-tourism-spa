import styles from "./PageTitle.module.css";

export default function PageTitle({ num, text }) {
  return (
    <span className={styles.title}>
      <strong> {num.toString().padStart(2, 0)}</strong> {text}
    </span>
  );
}
