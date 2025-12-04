import Link from "next/link";
import styles from "@/app/page.module.css";
import Image from "next/image";


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <Image
          src="/Picture.webp"
          alt="Camper at sunset"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroContainer}>
          <h2>Campers of your dreams</h2>
          <p>You can find everything you want in our catalog</p>
          <Link href="/catalog" className={styles.btn}>
            View Now
          </Link>
        </div>
      </section>
    </div>
  );
};
