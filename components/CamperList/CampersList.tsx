"use client";

import { useEffect, useRef, useState } from "react";
import { CamperCard } from "../CamperCard/CamperCard";
import { getCampers } from "@/lib/api/getCampers";
import type { Camper } from "@/types/campers";
import styles from "./CamperList.module.css";

export const CamperList = () => {
    const [campers, setCampers] = useState<Camper[]>([]);
    const [visibleCount, setVisibleCount] = useState(4);
    const listRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        async function load() {
            const data = await getCampers();
            setCampers(data);
        }
        load();
    }, []);

    const handleLoadMore = () => {
        const prevCount = visibleCount;
        const nextCount = prevCount + 4;
        setVisibleCount(nextCount);


        setTimeout(() => {
            const listEl = listRef.current;
            if (listEl) {
                const newCard = listEl.children[prevCount];
                if (newCard) {
                    newCard.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        }, 200);
    };

    const visibleCampers = campers.slice(0, visibleCount);

    return (
        <div className={styles.listWrapper}>
            <div className={styles.list} ref={listRef}>
                {visibleCampers.map((camper) => (
                    <div key={camper.id} className={styles.cardWrapper}>
                        <CamperCard camper={camper} />
                    </div>
                ))}
            </div>

            {visibleCount < campers.length && (
                <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
                    Load more
                </button>
            )}
        </div>
    );
};

