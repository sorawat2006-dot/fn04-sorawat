import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <img
        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
        alt="venue"
        className={styles.cardImage}
      />
      <div className={styles.cardBody}>
        <h2>The Bloom Pavilion</h2>
        <p>
          A stunning bouquet hall where love blossoms and unforgettable memories
          are made.
        </p>
      </div>
    </div>
  );
}