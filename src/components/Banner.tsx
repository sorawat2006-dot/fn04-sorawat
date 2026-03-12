import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
        alt="banner"
        className={styles.bannerImage}
      />
      <div className={styles.overlay}>
        <h1>where every event finds its venue</h1>
        <p>
          Finding the perfect venue has never been easier. Whether it&apos;s a
          wedding, corporate event, or private party, we connecting people to
          the perfect place.
        </p>
      </div>
    </div>
  );
}