"use client";

import styles from "./catalog.module.css";
import { FilterSidebar } from "@/components/FilterSidebar/FilterSidebar";
import { CamperList } from "@/components/CamperList/CampersList"


export default function CatalogPage() {

    return (
        <main className={styles.catalogContainer}>
            <aside className={styles.sidebar}>
                <FilterSidebar />
            </aside>
            <section className={styles.campersSection}>
                <CamperList />
            </section>
        </main>
    );
}
