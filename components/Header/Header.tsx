import Link from "next/link";
import styles from "@/components/Header/Header.module.css";
import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <Image
                    src="/Logo.svg"
                    alt="TravelTrucks logo"
                    width={136}
                    height={16}
                    priority
                />
            </h1>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/" className={styles.active}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/catalog" className={styles.active}>Catalog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;