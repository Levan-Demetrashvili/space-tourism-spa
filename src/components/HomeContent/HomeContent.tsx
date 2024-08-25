import styles from "./HomeContent.module.css";

export default function HomeContent() {
  return (
    <div className={styles.homeContent}>
      <div className={styles.homeText}>
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and
          relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className={styles.btnContainer}>
        <button>EXPLORE</button>
      </div>
    </div>
  );
}
