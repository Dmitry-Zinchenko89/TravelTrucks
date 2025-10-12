"use client";

import { useCampersStore } from "@/lib/store/useCampersStore";
import styles from "./FilterSidebar.module.css";
import Image from "next/image";

export const FilterSidebar = () => {
    const { filters, setFilter, fetchCampers } = useCampersStore();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await fetchCampers();
    };

    return (
        <form className={styles.sidebar} onSubmit={handleSubmit}>
            <div className={styles.block}>
                <label htmlFor="location" className={styles.label}>
                    Location
                </label>
                <div className={styles.inputWrapper}>
                    <Image
                        src="/Vector.svg"
                        alt="map icon"
                        width={20}
                        height={20}
                        className={styles.iconLocation} />
                    <input
                        id="location"
                        type="text"
                        placeholder="City"
                        value={filters.location}
                        onChange={(event) => setFilter("location", event.target.value)}
                        className={styles.input}
                    />
                </div>
            </div>

            <h3 className={styles.subtitle}>Filters</h3>

            <div className={styles.blockEquipment}>
                <h4 className={styles.sectionTitle}>Vehicle equipment</h4>
                <Image
                    src="/divider.svg"
                    alt="map icon"
                    width={360}
                    height={2}
                    className={styles.icon} />
                <div className={styles.optionsGrid}>
                    <label
                        className={`${styles.option} ${filters.AC ? styles.active : ""}`}
                        onClick={() => setFilter("AC", !filters.AC)}
                    >
                        <Image
                            src="/wind.svg"
                            alt="map icon"
                            width={32}
                            height={32}
                            className={styles.icon}
                        />
                        <span>AC</span>
                    </label>

                    <label
                        className={`${styles.option} ${filters.automatic ? styles.active : ""}`}
                        onClick={() => setFilter("automatic", !filters.automatic)}
                    >
                        <Image
                            src="/diagram.svg"
                            alt="map icon"
                            width={32}
                            height={32}
                            className={styles.icon} />
                        <span>Automatic</span>
                    </label>

                    <label
                        className={`${styles.option} ${filters.kitchen ? styles.active : ""}`}
                        onClick={() => setFilter("kitchen", !filters.kitchen)}
                    >
                        <Image
                            src="/cup-hot.svg"
                            alt="map icon"
                            width={32}
                            height={32}
                            className={styles.icon} />
                        <span>Kitchen</span>
                    </label>

                    <label
                        className={`${styles.option} ${filters.TV ? styles.active : ""}`}
                        onClick={() => setFilter("TV", !filters.TV)}
                    >
                        <Image
                            src="/tv.svg"
                            alt="map icon"
                            width={32}
                            height={32}
                            className={styles.icon} />
                        <span>TV</span>
                    </label>

                    <label
                        className={`${styles.option} ${filters.bathroom ? styles.active : ""}`}
                        onClick={() => setFilter("bathroom", !filters.bathroom)}
                    >
                        <Image
                            src="/ph_shower.svg"
                            alt="map icon"
                            width={32}
                            height={32}
                            className={styles.icon} />
                        <span>Bathroom</span>
                    </label>
                </div>
            </div>

            <div className={styles.blockType}>
                <h4 className={styles.sectionTitle}>Vehicle type</h4>
                <Image
                    src="/divider.svg"
                    alt="map icon"
                    width={360}
                    height={2}
                    className={styles.icon} />
                <div className={styles.optionsGrid}>
                    <label className={styles.option}>
                        <Image
                            src="/bi_grid-1x2.svg"
                            alt="map icon"
                            width={32}
                            height={32}
                            className={styles.icon} />
                        <input
                            type="radio"
                            name="form"
                            value="van"
                            checked={filters.form === "van"}
                            onChange={(event) => setFilter("form", event.target.value)}
                            className={styles.radio}
                        />
                        <span>Van</span>
                    </label>

                    <label className={styles.option}>
                        <Image
                            src="/bi_grid.svg"
                            alt="map icon"
                            width={32}
                            height={32}
                            className={styles.icon} />
                        <input
                            type="radio"
                            name="form"
                            value="fullyIntegrated"
                            checked={filters.form === "fullyIntegrated"}
                            onChange={(event) => setFilter("form", event.target.value)}
                            className={styles.radio}
                        />
                        <span className={styles.span}>Fully Integrated</span>
                    </label>

                    <label className={styles.option}>
                        <Image
                            src="/bi_grid-3x3-gap.svg"
                            alt="map icon"
                            width={32}
                            height={32}
                            className={styles.icon} />
                        <input
                            type="radio"
                            name="form"
                            value="alcove"
                            checked={filters.form === "alcove"}
                            onChange={(event) => setFilter("form", event.target.value)}
                            className={styles.radio}
                        />
                        <span>Alcove</span>
                    </label>
                </div>
            </div>

            <button type="submit" className={styles.button}>
                Search
            </button>
        </form >
    );
}