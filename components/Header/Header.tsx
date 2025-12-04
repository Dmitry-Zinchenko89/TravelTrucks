"use client"

import Link from "next/link";
import styles from "@/components/Header/Header.module.css";
import Image from "next/image";
import { useState } from "react";


export const Header = () => {
    const [active, setActive] = useState("home");
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
                        <Link href="/" className={`${styles.link} ${active === "home" ? styles.active : ""}`}
                            onClick={() => setActive("home")}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/catalog"
                            className={`${styles.link} ${active === "catalog" ? styles.active : ""}`}
                            onClick={() => setActive("catalog")}
                        >
                            Catalog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header >
    )
};

